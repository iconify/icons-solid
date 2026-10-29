import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q-tl41blh.css';
import '../../css/j/j56euqa_l.css';
import '../../css/h/hpnt--oey.css';
import '../../css/e/eoiz0rolg.css';
import '../../css/p/p2z9olxff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q-tl41blh wm-k"/><path class="j56euqa_l wm-a"/><path class="hpnt--oey wm-shadow"/><path class="eoiz0rolg wm-k"/><path class="p2z9olxff wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-engrave"} {...others} />);
}

export default Component;
