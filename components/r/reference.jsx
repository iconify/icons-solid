import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pfxmy0brn.css';
import '../../css/m/mro1p6pmy.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="pfxmy0brn"/><path class="mro1p6pmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:reference"} {...others} />);
}

export default Component;
