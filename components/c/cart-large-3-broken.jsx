import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tgtr_43fx.css';
import '../../css/r/r7x2ymb7x.css';
import '../../css/e/e6zba7arf.css';
import '../../css/a/abm51hbjy.css';
import '../../css/h/hoewsgvgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tgtr_43fx"/><path class="r7x2ymb7x"/><path class="e6zba7arf"/><path class="abm51hbjy"/><path class="hoewsgvgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-3-broken"} {...others} />);
}

export default Component;
