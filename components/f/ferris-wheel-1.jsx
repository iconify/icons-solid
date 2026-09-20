import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stl76lgmx.css';
import '../../css/y/yufs04v9o.css';
import '../../css/q/qx6nnqbto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="stl76lgmx"/><path class="yufs04v9o"/><path class="qx6nnqbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:ferris-wheel-1"} {...others} />);
}

export default Component;
