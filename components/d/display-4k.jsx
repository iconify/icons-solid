import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ycy-3wl1l.css';
import '../../css/m/mh006xb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ycy-3wl1l"/><path class="mh006xb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:display-4k"} {...others} />);
}

export default Component;
