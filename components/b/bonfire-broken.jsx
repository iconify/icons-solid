import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jwvedsvir.css';
import '../../css/l/l5vdtnbpz.css';
import '../../css/g/g6m793csp.css';
import '../../css/d/d0hlz7c2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jwvedsvir"/><path class="l5vdtnbpz"/><path class="g6m793csp"/><path class="d0hlz7c2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bonfire-broken"} {...others} />);
}

export default Component;
