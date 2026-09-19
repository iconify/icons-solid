import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a55cyobzk.css';
import '../../css/m/m0lx8_b_c.css';
import '../../css/r/rwqtpccge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="a55cyobzk"/><path class="m0lx8_b_c"/><path class="rwqtpccge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:menu-10"} {...others} />);
}

export default Component;
