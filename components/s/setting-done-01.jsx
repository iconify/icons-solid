import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwhqdac_e.css';
import '../../css/c/cc0yg-bhd.css';
import '../../css/j/jy51gjgdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hwhqdac_e"/><path class="cc0yg-bhd"/><path class="jy51gjgdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setting-done-01"} {...others} />);
}

export default Component;
