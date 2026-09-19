import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mojqfzn7z.css';
import '../../css/s/suy5d8_au.css';
import '../../css/i/iahd35_lx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mojqfzn7z"/><circle class="suy5d8_au"/><path class="iahd35_lx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-03"} {...others} />);
}

export default Component;
