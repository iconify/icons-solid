import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szatyqnji.css';
import '../../css/q/qlmmw0bib.css';
import '../../css/y/yvaopobve.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="szatyqnji"/><path class="qlmmw0bib"/><path class="yvaopobve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:rocket-takeoff"} {...others} />);
}

export default Component;
