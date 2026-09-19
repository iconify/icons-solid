import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o3dgnumue.css';
import '../../css/j/j1-zg0xja.css';
import '../../css/t/tow7vpjog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o3dgnumue"/><path class="j1-zg0xja"/><path class="tow7vpjog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-bar-chart-01"} {...others} />);
}

export default Component;
