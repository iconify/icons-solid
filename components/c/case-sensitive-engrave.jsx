import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lbhzabc3w.css';
import '../../css/p/ps5stvfzo.css';
import '../../css/c/coe43bb1b.css';
import '../../css/u/un0gcky1u.css';
import '../../css/e/eo4rdebcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lbhzabc3w wm-k"/><path class="ps5stvfzo wm-a"/><path class="coe43bb1b wm-shadow"/><path class="un0gcky1u wm-k"/><path class="eo4rdebcb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-sensitive-engrave"} {...others} />);
}

export default Component;
