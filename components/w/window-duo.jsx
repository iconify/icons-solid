import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j7cqu14cb.css';
import '../../css/x/xbdrabtly.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="j7cqu14cb"/><path class="xbdrabtly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:window-duo"} {...others} />);
}

export default Component;
