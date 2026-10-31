import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g5wwvxb6o.css';
import '../../css/q/qdsk_gbyr.css';
import '../../css/w/wxz0-ocxv.css';
import '../../css/m/mi-j0bkan.css';
import '../../css/e/e8bqvzsim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g5wwvxb6o wm-shadow"/><path class="qdsk_gbyr"/><path class="wxz0-ocxv"/><path class="mi-j0bkan"/><path class="e8bqvzsim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:palm-tree"} {...others} />);
}

export default Component;
