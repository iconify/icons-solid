import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn6_l5bks.css';
import '../../css/a/azaymzbvh.css';
import '../../css/c/c3jw812ej.css';
import '../../css/n/nhn4bccgw.css';
import '../../css/h/h707dc7vu.css';
import '../../css/g/gylrr9btj.css';
import '../../css/c/c1z8oo49r.css';
import '../../css/o/olg0i9bbl.css';
import '../../css/n/n_07n9bvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yn6_l5bks"/><path class="azaymzbvh wm-a"/><path class="c3jw812ej wm-deco"/><path class="nhn4bccgw wm-k"/><path class="h707dc7vu wm-k"/><path class="gylrr9btj wm-a"/><path class="c1z8oo49r wm-shadow"/><path class="olg0i9bbl wm-shine"/><path class="n_07n9bvw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bell-concierge"} {...others} />);
}

export default Component;
