import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9c6o_bmx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j9c6o_bmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:observatory-dome"} {...others} />);
}

export default Component;
