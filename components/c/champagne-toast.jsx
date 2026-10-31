import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tga5xnllz.css';
import '../../css/z/zc3qjjxiv.css';
import '../../css/s/s39pugjmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tga5xnllz"/><path class="zc3qjjxiv"/><path class="s39pugjmf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:champagne-toast"} {...others} />);
}

export default Component;
