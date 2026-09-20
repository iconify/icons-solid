import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytmg0lbwm.css';
import '../../css/v/v7l8omrpk.css';
import '../../css/u/u5qgc4bnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ytmg0lbwm"/><path class="v7l8omrpk"/><path class="u5qgc4bnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bag-duotone"} {...others} />);
}

export default Component;
