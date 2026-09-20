import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhm703nga.css';
import '../../css/e/e3a6xsbtr.css';
import '../../css/f/fx8mkab4g.css';
import '../../css/h/hnoua222e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dhm703nga"/><path class="e3a6xsbtr"/><rect transform="matrix(-1 0 0 -1 28 20)" class="fx8mkab4g"/><path class="hnoua222e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:images"} {...others} />);
}

export default Component;
