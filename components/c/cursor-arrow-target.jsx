import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t63k_lbpx.css';
import '../../css/y/yye-hjo_v.css';
import '../../css/u/uati5bbqx.css';
import '../../css/i/im7eucezq.css';
import '../../css/t/t1d-2pjsb.css';
import '../../css/u/uskh-2bej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t63k_lbpx"/><path class="yye-hjo_v"/><path class="uati5bbqx"/><path class="im7eucezq"/><path class="t1d-2pjsb"/><path class="uskh-2bej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cursor-arrow-target"} {...others} />);
}

export default Component;
