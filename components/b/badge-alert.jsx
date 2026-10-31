import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/j/jyqhx8fnd.css';
import '../../css/e/et17t6bin.css';
import '../../css/n/nymbqgapg.css';
import '../../css/s/s2pgaqb_e.css';
import '../../css/v/v4f96ab1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="jyqhx8fnd"/><path class="et17t6bin"/><path class="nymbqgapg"/><path class="s2pgaqb_e"/><path class="v4f96ab1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:badge-alert"} {...others} />);
}

export default Component;
