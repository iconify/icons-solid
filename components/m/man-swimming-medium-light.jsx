import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_7sbmetm.css';
import '../../css/r/rxrozfb7h.css';
import '../../css/j/jm8slcb5g.css';
import '../../css/e/e-nc27ben.css';
import '../../css/t/te4cjt8ip.css';
import '../../css/v/v8nrfp2aj.css';
import '../../css/l/lr_10hbal.css';
import '../../css/m/mc-1lyb9l.css';
import '../../css/n/nkp9t0_8x.css';
import '../../css/j/jzdf-ob6r.css';
import '../../css/v/vz1eupxig.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y_7sbmetm"/><path class="rxrozfb7h"/><path class="jm8slcb5g"/><path class="e-nc27ben"/><path class="te4cjt8ip"/><path class="v8nrfp2aj"/><path class="lr_10hbal"/><path class="mc-1lyb9l"/><path class="nkp9t0_8x"/><path class="jzdf-ob6r"/><path class="vz1eupxig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-swimming-medium-light"} {...others} />);
}

export default Component;
