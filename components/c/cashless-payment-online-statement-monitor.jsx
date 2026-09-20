import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldv2_paun.css';
import '../../css/f/fxwld854u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ldv2_paun"/><path class="fxwld854u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cashless-payment-online-statement-monitor"} {...others} />);
}

export default Component;
