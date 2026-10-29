import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpq_ddb3r.css';
import '../../css/q/qm1kgbb7o.css';
import '../../css/m/mycn8essy.css';
import '../../css/t/trlj2xbul.css';
import '../../css/d/dobe3vbmj.css';
import '../../css/i/ipkfzwb8q.css';
import '../../css/e/e322w_bbk.css';
import '../../css/m/m9kpf2b2i.css';
import '../../css/s/sfw84gbha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow wpq_ddb3r"/><path class="qm1kgbb7o wm-shadow"/><path class="mycn8essy"/><path class="trlj2xbul"/><path class="dobe3vbmj"/><path class="ipkfzwb8q"/><path class="e322w_bbk wm-shine"/><path class="m9kpf2b2i wm-shine"/><path class="sfw84gbha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:corner-down-right"} {...others} />);
}

export default Component;
