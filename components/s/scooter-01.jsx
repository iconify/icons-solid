import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l35j0e94n.css';
import '../../css/c/c0gc0ob6r.css';
import '../../css/b/bcj4t0buj.css';
import '../../css/c/cnc8kxp4p.css';
import '../../css/q/q7ybb3p4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l35j0e94n"/><path class="c0gc0ob6r"/><path class="bcj4t0buj"/><circle class="cnc8kxp4p"/><path class="q7ybb3p4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scooter-01"} {...others} />);
}

export default Component;
