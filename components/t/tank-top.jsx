import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctyka6kni.css';
import '../../css/x/xn8dv2b4p.css';
import '../../css/s/sw67oqp7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ctyka6kni"/><path class="xn8dv2b4p"/><path class="sw67oqp7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tank-top"} {...others} />);
}

export default Component;
