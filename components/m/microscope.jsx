import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kgfx3e43q.css';
import '../../css/p/p8yrg0x8f.css';
import '../../css/y/yt69a67rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kgfx3e43q wm-a"/><path class="p8yrg0x8f"/><path class="wm-a yt69a67rh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microscope"} {...others} />);
}

export default Component;
