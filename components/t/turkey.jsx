import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7m85zbxu.css';
import '../../css/c/cgs-uwvct.css';
import '../../css/g/g51thdeli.css';
import '../../css/d/d64w7pbmt.css';
import '../../css/h/h3fvscc3g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p7m85zbxu"/><path class="cgs-uwvct"/><path class="g51thdeli"/><circle transform="rotate(35.072 38.356 7.483)" class="d64w7pbmt"/><circle transform="rotate(35.072 40.81 9.206)" class="h3fvscc3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:turkey"} {...others} />);
}

export default Component;
