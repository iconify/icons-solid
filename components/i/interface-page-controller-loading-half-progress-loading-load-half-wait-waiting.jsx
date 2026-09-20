import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tfum4pkvh.css';
import '../../css/y/y6_vy_bth.css';
import '../../css/j/j5fya0brq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="tfum4pkvh"/><path class="y6_vy_bth"/><path class="j5fya0brq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-loading-half-progress-loading-load-half-wait-waiting"} {...others} />);
}

export default Component;
