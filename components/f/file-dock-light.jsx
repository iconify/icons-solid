import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/irzp74b2d.css';
import '../../css/l/lepgkoxkn.css';
import '../../css/f/fvhj0vbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="irzp74b2d"/><path class="lepgkoxkn"/><path class="fvhj0vbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-dock-light"} {...others} />);
}

export default Component;
