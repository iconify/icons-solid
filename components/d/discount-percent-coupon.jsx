import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lqk-0cccp.css';
import '../../css/e/ec2hmb2zt.css';
import '../../css/f/fka0qdkmy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lqk-0cccp"/><path class="ec2hmb2zt"/><path class="fka0qdkmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:discount-percent-coupon"} {...others} />);
}

export default Component;
