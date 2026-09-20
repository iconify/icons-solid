import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mu0x0scgz.css';
import '../../css/c/c2794gbjv.css';
import '../../css/g/g0oi4znzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="mu0x0scgz"/><path class="c2794gbjv"/><path clip-rule="evenodd" class="g0oi4znzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:azureai"} {...others} />);
}

export default Component;
