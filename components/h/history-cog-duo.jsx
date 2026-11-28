import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi3r6abpq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fe53ifbdz.css';
import '../../css/y/ygbs7gbiy.css';
import '../../css/e/e8gc3zb7m.css';
import '../../css/t/tyc4keb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi3r6abpq secondary"/><g class="dt0cm9dhy primary"><path class="fe53ifbdz"/><path class="ygbs7gbiy"/><path class="e8gc3zb7m"/><path class="tyc4keb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:history-cog-duo"} {...others} />);
}

export default Component;
