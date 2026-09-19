import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/doj91o9hc.css';
import '../../css/i/ilqbw3b4c.css';
import '../../css/r/rp5txgbzd.css';
import '../../css/c/c8ok01kit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="doj91o9hc"/><path class="ilqbw3b4c"/><path class="rp5txgbzd"/><path class="c8ok01kit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-correct-4"} {...others} />);
}

export default Component;
