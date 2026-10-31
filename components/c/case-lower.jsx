import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pzgy2ibzo.css';
import '../../css/i/i9jm-20sb.css';
import '../../css/i/izvhglblk.css';
import '../../css/r/rnnmp6upq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pzgy2ibzo wm-shadow"/><path class="i9jm-20sb wm-shadow"/><path class="izvhglblk"/><path class="rnnmp6upq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:case-lower"} {...others} />);
}

export default Component;
