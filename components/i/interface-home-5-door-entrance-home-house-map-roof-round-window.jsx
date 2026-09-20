import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uenfb1boi.css';
import '../../css/z/zhzbkdbey.css';
import '../../css/a/a2--86u4z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uenfb1boi"/><path class="zhzbkdbey"/><circle class="a2--86u4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-home-5-door-entrance-home-house-map-roof-round-window"} {...others} />);
}

export default Component;
