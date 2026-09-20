import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/i/idn0knbut.css';
import '../../css/i/iux_3cbqn.css';
import '../../css/w/w0_c1ibjt.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="umm606kxf"><path class="idn0knbut"/><path class="iux_3cbqn"/><path class="w0_c1ibjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:key"} {...others} />);
}

export default Component;
