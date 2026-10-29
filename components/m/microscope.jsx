import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txhaihb3h.css';
import '../../css/p/pzvhobbgm.css';
import '../../css/r/rqpuvvb3m.css';
import '../../css/z/zqjrihbhq.css';
import '../../css/n/n-tbjlb4u.css';
import '../../css/a/a4k6v_b-u.css';
import '../../css/d/dm_s79isz.css';
import '../../css/k/kh0nmc_dh.css';
import '../../css/o/o4m7argyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txhaihb3h wm-shadow"/><path class="pzvhobbgm wm-k"/><path class="rqpuvvb3m wm-k"/><path class="wm-a zqjrihbhq"/><path class="n-tbjlb4u wm-a"/><path class="a4k6v_b-u wm-a"/><path class="dm_s79isz wm-a"/><path class="kh0nmc_dh wm-a"/><path class="o4m7argyc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:microscope"} {...others} />);
}

export default Component;
