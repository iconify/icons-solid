import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/j/j8di39b_c.css';
import '../../css/o/ofikpv3ei.css';
import '../../css/e/eq-y86bpl.css';
import '../../css/q/qu7lvtbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="j8di39b_c"/><path class="ofikpv3ei"/><path class="eq-y86bpl"/><path class="qu7lvtbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-2-line-duotone"} {...others} />);
}

export default Component;
