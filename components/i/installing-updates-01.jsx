import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m30is0msy.css';
import '../../css/q/qhz72-bbk.css';
import '../../css/s/somstlbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m30is0msy"/><path class="qhz72-bbk"/><path class="somstlbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:installing-updates-01"} {...others} />);
}

export default Component;
