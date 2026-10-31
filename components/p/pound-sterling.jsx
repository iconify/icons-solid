import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e72dt9b3l.css';
import '../../css/u/usfbnfoug.css';
import '../../css/l/l9bado51g.css';
import '../../css/y/yi8-9edyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e72dt9b3l wm-k"/><path class="usfbnfoug wm-deco"/><path class="l9bado51g wm-k"/><path class="wm-shadow yi8-9edyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:pound-sterling"} {...others} />);
}

export default Component;
