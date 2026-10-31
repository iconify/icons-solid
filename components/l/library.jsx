import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cn1bldb6t.css';
import '../../css/g/g3xhghboi.css';
import '../../css/u/up--uvvkd.css';
import '../../css/c/cqtrjzbvb.css';
import '../../css/w/wzuar4fbo.css';
import '../../css/p/p-h5rybvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cn1bldb6t wm-shadow"/><path class="g3xhghboi"/><path class="up--uvvkd"/><path class="cqtrjzbvb"/><path class="wzuar4fbo"/><path class="p-h5rybvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:library"} {...others} />);
}

export default Component;
