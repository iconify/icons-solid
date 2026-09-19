import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gk-rq1frw.css';
import '../../css/i/iox6mb34c.css';
import '../../css/w/wt25_kb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gk-rq1frw"/><path class="iox6mb34c"/><path class="wt25_kb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-slow-wind-01"} {...others} />);
}

export default Component;
