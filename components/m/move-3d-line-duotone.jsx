import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qim-6bkwl.css';
import '../../css/q/qlvg9o9nq.css';
import '../../css/m/mcf4dis3x.css';
import '../../css/a/at5_xs54h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qim-6bkwl"/><path class="qlvg9o9nq"/><path class="mcf4dis3x"/><path class="at5_xs54h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-3d-line-duotone"} {...others} />);
}

export default Component;
