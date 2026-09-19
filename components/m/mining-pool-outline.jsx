import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xjiy7pbud.css';
import '../../css/q/qpkpssblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="xjiy7pbud"/><path class="qpkpssblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mining-pool-outline"} {...others} />);
}

export default Component;
