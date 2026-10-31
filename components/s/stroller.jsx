import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g-qt3pb7y.css';
import '../../css/x/xy07-mb-g.css';
import '../../css/u/u5doe7h9f.css';
import '../../css/g/gw-yddcae.css';
import '../../css/i/i2kmntbut.css';
import '../../css/o/o18osub4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g-qt3pb7y wm-shadow"/><path class="xy07-mb-g"/><path class="u5doe7h9f"/><path class="gw-yddcae"/><path class="i2kmntbut"/><path class="o18osub4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:stroller"} {...others} />);
}

export default Component;
