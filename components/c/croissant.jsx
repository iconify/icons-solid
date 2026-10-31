import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jm1-edc3a.css';
import '../../css/e/euf7i3bem.css';
import '../../css/v/vobmysier.css';
import '../../css/z/zaqyk1vqh.css';
import '../../css/x/xr8nwyb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jm1-edc3a wm-shadow"/><path class="euf7i3bem"/><path class="vobmysier"/><path class="zaqyk1vqh"/><path class="xr8nwyb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:croissant"} {...others} />);
}

export default Component;
