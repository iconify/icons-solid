import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ipd-k1b_h.css';
import '../../css/d/dln8ziysl.css';
import '../../css/g/geyqm2mnv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ipd-k1b_h"/><path class="dln8ziysl"/><path class="geyqm2mnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:non-commercial-dollars"} {...others} />);
}

export default Component;
