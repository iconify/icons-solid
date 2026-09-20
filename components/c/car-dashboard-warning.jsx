import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/stv5w1u0d.css';
import '../../css/d/dyz-llthy.css';
import '../../css/x/x0b8uui8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="stv5w1u0d"/><path class="dyz-llthy"/><path class="x0b8uui8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-dashboard-warning"} {...others} />);
}

export default Component;
