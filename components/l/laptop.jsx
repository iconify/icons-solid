import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl1oqwibm.css';
import '../../css/y/yz2b6f11q.css';
import '../../css/e/ey4dcwbbm.css';
import '../../css/y/yavo5x82z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jl1oqwibm"/><path class="yz2b6f11q"/><path class="ey4dcwbbm"/><path class="yavo5x82z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:laptop"} {...others} />);
}

export default Component;
