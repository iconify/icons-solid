import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tpp2vxiyy.css';
import '../../css/y/ynid65nza.css';
import '../../css/f/fbg9e3bvi.css';
import '../../css/u/u19kmfb1u.css';
import '../../css/l/lub6bc51k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tpp2vxiyy wm-shadow"/><path class="ynid65nza"/><path class="fbg9e3bvi"/><path class="u19kmfb1u"/><path class="lub6bc51k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:luggage"} {...others} />);
}

export default Component;
