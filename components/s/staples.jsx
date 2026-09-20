import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8ul-wbxh.css';

const viewBox = {"width":184.201,"height":38.9};
const content = `<path class="g8ul-wbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:staples"} {...others} />);
}

export default Component;
