import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ab_-mwb9e.css';
import '../../css/x/x6bwb1mzx.css';
import '../../css/e/ee28qp0nf.css';
import '../../css/z/zcd_-mq2h.css';
import '../../css/u/ualrpgq_q.css';
import '../../css/p/pcbpn0bze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ab_-mwb9e wm-shadow"/><path class="x6bwb1mzx"/><path class="ee28qp0nf"/><path class="zcd_-mq2h"/><path class="ualrpgq_q"/><path class="pcbpn0bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-donut"} {...others} />);
}

export default Component;
