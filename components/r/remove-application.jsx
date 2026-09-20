import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vthoncfqk.css';
import '../../css/m/mlv6tlbcz.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="vthoncfqk"/><path class="mlv6tlbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:remove-application"} {...others} />);
}

export default Component;
