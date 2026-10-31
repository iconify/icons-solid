import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/x/x1ab9do9c.css';
import '../../css/j/jnu8mcs8e.css';
import '../../css/j/jsyq7453v.css';
import '../../css/t/t18i-qb3n.css';
import '../../css/v/v_g8odbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="x1ab9do9c"/><path class="jnu8mcs8e"/><path class="jsyq7453v"/><path class="t18i-qb3n"/><path class="v_g8odbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:id-card"} {...others} />);
}

export default Component;
