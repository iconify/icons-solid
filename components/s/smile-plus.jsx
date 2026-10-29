import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nqfn_ibbk.css';
import '../../css/c/cydwfwbka.css';
import '../../css/y/ydl3tdbsf.css';
import '../../css/d/d9wnn-kll.css';
import '../../css/e/e2sjb6bzb.css';
import '../../css/g/gvic64y0f.css';
import '../../css/c/ckmp33ozp.css';
import '../../css/w/wlt3bebgr.css';
import '../../css/e/ezerxp8xx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nqfn_ibbk wm-shadow"/><path class="cydwfwbka"/><path class="ydl3tdbsf"/><path class="d9wnn-kll"/><path class="e2sjb6bzb wm-shine"/><path class="gvic64y0f wm-s"/><path class="ckmp33ozp wm-s"/><path class="wlt3bebgr wm-s"/><path class="ezerxp8xx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:smile-plus"} {...others} />);
}

export default Component;
