import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gqkt7bcvk.css';
import '../../css/u/up3pyu-he.css';
import '../../css/l/ldia-8bfr.css';
import '../../css/j/js83bcb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gqkt7bcvk"/><path class="up3pyu-he wm-a"/><path class="ldia-8bfr wm-k"/><path class="js83bcb_r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:football-sketch"} {...others} />);
}

export default Component;
