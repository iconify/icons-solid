import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s8k1eabdn.css';
import '../../css/y/ycf_l2bnq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="s8k1eabdn"/><path class="ycf_l2bnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:customer-support-7"} {...others} />);
}

export default Component;
