import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lsvvm8bbl.css';
import '../../css/a/asj_clbhe.css';
import '../../css/z/z9o4zrboc.css';
import '../../css/n/n6lr72bcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lsvvm8bbl wm-shadow"/><path class="asj_clbhe"/><path class="z9o4zrboc"/><path class="n6lr72bcy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sunrise"} {...others} />);
}

export default Component;
