import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/c/cd9wpgo-d.css';
import '../../css/i/ir2lu_bgj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="cd9wpgo-d"/><path class="ir2lu_bgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crop-bold"} {...others} />);
}

export default Component;
