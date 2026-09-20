import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1mxj3b-m.css';
import '../../css/n/nx9y5ihpu.css';
import '../../css/d/dsakg7tne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w1mxj3b-m"/><path clip-rule="evenodd" class="nx9y5ihpu"/><path class="dsakg7tne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sunset-bold"} {...others} />);
}

export default Component;
