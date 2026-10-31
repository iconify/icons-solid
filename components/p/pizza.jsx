import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j2ogkab2m.css';
import '../../css/p/pnzlkwbqz.css';
import '../../css/k/kpvjw-b-d.css';
import '../../css/o/ocgv_nb9v.css';
import '../../css/r/r37cz0bti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j2ogkab2m wm-shadow"/><path class="pnzlkwbqz"/><path class="kpvjw-b-d"/><path class="ocgv_nb9v"/><path class="r37cz0bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pizza"} {...others} />);
}

export default Component;
