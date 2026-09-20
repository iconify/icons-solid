import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rwq5i5cbv.css';
import '../../css/f/frbe81j1n.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="rwq5i5cbv"/><path class="frbe81j1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:turn-around-down-direction"} {...others} />);
}

export default Component;
