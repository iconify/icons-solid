import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/drbzacc-b.css';
import '../../css/h/hkrz-8b6k.css';
import '../../css/e/e_xtotenz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="drbzacc-b"/><path class="hkrz-8b6k"/><path class="e_xtotenz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dirham"} {...others} />);
}

export default Component;
