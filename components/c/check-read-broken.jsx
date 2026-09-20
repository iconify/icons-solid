import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wqhegdbuk.css';
import '../../css/d/dwziarbem.css';
import '../../css/j/jguj386_i.css';
import '../../css/s/sb3s0p75l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wqhegdbuk"/><path class="dwziarbem"/><path class="jguj386_i"/><path class="sb3s0p75l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:check-read-broken"} {...others} />);
}

export default Component;
