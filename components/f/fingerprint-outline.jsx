import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tx-2acchp.css';
import '../../css/l/l-ehgjbqb.css';
import '../../css/e/ei8zogbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="tx-2acchp"/><path class="l-ehgjbqb"/><path class="ei8zogbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:fingerprint-outline"} {...others} />);
}

export default Component;
