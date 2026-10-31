import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z8xzfx8vy.css';
import '../../css/y/ypbfh0z5c.css';
import '../../css/i/ixjaa35ii.css';
import '../../css/f/foffjsb0n.css';
import '../../css/b/bcqe_19vu.css';
import '../../css/b/b0e3dub1q.css';
import '../../css/s/s97n8iceh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z8xzfx8vy"/><path class="ypbfh0z5c"/><path class="ixjaa35ii"/><path class="foffjsb0n"/><path class="bcqe_19vu"/><path class="b0e3dub1q"/><path class="s97n8iceh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:database-backup"} {...others} />);
}

export default Component;
