import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhv44tbmh.css';
import '../../css/u/ujnb_lb2j.css';
import '../../css/v/vkccelbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhv44tbmh"/><path class="ujnb_lb2j"/><path class="vkccelbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cashless-payment-smart-pay-bus-smartphone-qr"} {...others} />);
}

export default Component;
