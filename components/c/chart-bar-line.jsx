import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r2pi-9bvu.css';
import '../../css/b/bg_u5bb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r2pi-9bvu"/><path class="bg_u5bb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-bar-line"} {...others} />);
}

export default Component;
