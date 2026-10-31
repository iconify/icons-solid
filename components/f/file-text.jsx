import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/t/t20xnac_q.css';
import '../../css/o/o03w0ph2n.css';
import '../../css/l/l3x-kdo-e.css';
import '../../css/x/xdtod9bxk.css';
import '../../css/x/x9ihspb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="t20xnac_q"/><path class="o03w0ph2n"/><path class="l3x-kdo-e"/><path class="xdtod9bxk"/><path class="x9ihspb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-text"} {...others} />);
}

export default Component;
