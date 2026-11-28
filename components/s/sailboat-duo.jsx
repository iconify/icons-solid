import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwjtq0bon.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xs3efil7b.css';
import '../../css/m/mmizfzbwi.css';
import '../../css/w/we9upfblt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwjtq0bon secondary"/><g class="dt0cm9dhy primary"><path class="xs3efil7b"/><path class="mmizfzbwi"/><path class="we9upfblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sailboat-duo"} {...others} />);
}

export default Component;
