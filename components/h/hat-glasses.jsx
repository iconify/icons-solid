import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tr7sirbvc.css';
import '../../css/e/ej5a_l4in.css';
import '../../css/k/kgtb4abpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tr7sirbvc"/><path class="ej5a_l4in"/><path class="kgtb4abpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hat-glasses"} {...others} />);
}

export default Component;
