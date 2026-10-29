import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psuq36ara.css';
import '../../css/h/hec0arbcc.css';
import '../../css/p/pj2d1gb_s.css';
import '../../css/k/k-s_e-76p.css';
import '../../css/q/q5rps6bij.css';
import '../../css/d/ducvn_tyg.css';
import '../../css/h/h0gy10t3m.css';
import '../../css/z/z_g2awo6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="psuq36ara wm-a"/><path class="hec0arbcc wm-a"/><path class="pj2d1gb_s wm-a"/><path class="k-s_e-76p wm-k"/><path class="q5rps6bij wm-k"/><path class="ducvn_tyg wm-k"/><path class="h0gy10t3m wm-shine"/><path class="wm-k z_g2awo6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:messages"} {...others} />);
}

export default Component;
