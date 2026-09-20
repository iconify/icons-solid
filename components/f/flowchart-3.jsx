import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_cshy6xr.css';
import '../../css/x/x-7u2igga.css';
import '../../css/g/g4c9tkgrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g_cshy6xr"/><path class="x-7u2igga"/><path class="g4c9tkgrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:flowchart-3"} {...others} />);
}

export default Component;
