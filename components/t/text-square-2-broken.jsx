import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kbyaeriuj.css';
import '../../css/l/lhx-r4bhy.css';
import '../../css/f/fbyc4_bzy.css';
import '../../css/e/erf8l4xce.css';
import '../../css/h/hf617yxtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kbyaeriuj"/><path class="lhx-r4bhy"/><path class="fbyc4_bzy"/><path class="erf8l4xce"/><path class="hf617yxtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-square-2-broken"} {...others} />);
}

export default Component;
