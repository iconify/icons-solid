import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_8erebfm.css';
import '../../css/m/mw8_4fc7e.css';
import '../../css/s/sd5kuwbgo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="y_8erebfm"/><path class="mw8_4fc7e"/><path class="sd5kuwbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:key"} {...others} />);
}

export default Component;
