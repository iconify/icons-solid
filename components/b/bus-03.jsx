import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qg-iftbdx.css';
import '../../css/t/t0sl4gbot.css';
import '../../css/g/gtwrmobtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qg-iftbdx"/><path class="t0sl4gbot"/><path class="gtwrmobtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bus-03"} {...others} />);
}

export default Component;
