import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neuw9obnw.css';
import '../../css/u/ub392o4dq.css';
import '../../css/s/sv88clbwm.css';
import '../../css/k/k8n_s9mjg.css';
import '../../css/n/nbk9hfwrf.css';
import '../../css/s/szzkdgp0p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="neuw9obnw"/><path class="ub392o4dq"/><path class="sv88clbwm"/><path class="k8n_s9mjg"/><path class="nbk9hfwrf"/><path class="szzkdgp0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:agrivoltaics-20-bold"} {...others} />);
}

export default Component;
