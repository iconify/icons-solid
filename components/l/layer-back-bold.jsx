import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oze6jsybx.css';
import '../../css/z/zu_amvtay.css';
import '../../css/m/mqm_betay.css';
import '../../css/y/yano2qblk.css';
import '../../css/h/hrnojc6mh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="oze6jsybx"/><path clip-rule="evenodd" class="zu_amvtay"/><path class="mqm_betay"/><path clip-rule="evenodd" class="yano2qblk"/><path class="hrnojc6mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-back-bold"} {...others} />);
}

export default Component;
