import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/plgmnm5bs.css';
import '../../css/r/rvadobhgc.css';
import '../../css/c/c-n-9gpof.css';
import '../../css/k/km9xt0bvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="plgmnm5bs wm-k"/><path class="rvadobhgc wm-shadow"/><path class="c-n-9gpof wm-k"/><path class="km9xt0bvl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-drive-engrave"} {...others} />);
}

export default Component;
