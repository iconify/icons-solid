import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kuisey8iv.css';
import '../../css/v/vkprnmhcj.css';
import '../../css/m/mi0sarbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kuisey8iv"/><path class="vkprnmhcj"/><path class="mi0sarbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apron"} {...others} />);
}

export default Component;
