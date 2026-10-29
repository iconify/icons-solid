import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z88048bib.css';
import '../../css/o/ofeowndyc.css';
import '../../css/l/l2bnabccz.css';
import '../../css/a/a_tly4e8e.css';
import '../../css/p/pjkk_7bql.css';
import '../../css/p/p_p-11brz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z88048bib"/><path class="ofeowndyc wm-k"/><path class="l2bnabccz wm-k"/><circle class="a_tly4e8e wm-a"/><path class="pjkk_7bql wm-a"/><path class="p_p-11brz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:accessibility-sketch"} {...others} />);
}

export default Component;
