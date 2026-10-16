import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6a8c-fpg.css';

const viewBox = {"width":216.75,"height":91.5};
const content = `<path class="g6a8c-fpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:flowise"} {...others} />);
}

export default Component;
