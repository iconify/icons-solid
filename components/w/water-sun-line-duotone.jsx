import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nz-21lbrb.css';
import '../../css/u/uv7pidarg.css';
import '../../css/k/kk0xpebyx.css';
import '../../css/l/lq7a-_8su.css';
import '../../css/q/qi4ad9bta.css';
import '../../css/i/i0kw3he6n.css';
import '../../css/n/n_ucwybmv.css';
import '../../css/u/uq9j8rbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nz-21lbrb"/><path class="uv7pidarg"/><path class="kk0xpebyx"/><path class="lq7a-_8su"/><path class="qi4ad9bta"/><path class="i0kw3he6n"/><path class="n_ucwybmv"/><path class="uq9j8rbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-sun-line-duotone"} {...others} />);
}

export default Component;
