import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcdojxrxh.css';
import '../../css/p/p-amgebsa.css';
import '../../css/y/y577r3h8e.css';
import '../../css/p/pbye85pfr.css';
import '../../css/s/sgp1aln8l.css';
import '../../css/e/eboxjwe6b.css';
import '../../css/p/pk_7dd2db.css';
import '../../css/y/yrfigykzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fcdojxrxh wm-a"/><path class="p-amgebsa wm-a"/><path class="wm-a y577r3h8e"/><path class="pbye85pfr wm-k"/><path class="sgp1aln8l wm-k"/><path class="eboxjwe6b wm-k"/><path class="pk_7dd2db wm-shine"/><path class="wm-k yrfigykzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:briefcase-medical"} {...others} />);
}

export default Component;
