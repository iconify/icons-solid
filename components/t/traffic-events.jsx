import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujvj9nxje.css';
import '../../css/j/j1bvvbb2u.css';
import '../../css/t/tn0k83bve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ujvj9nxje"/><path class="j1bvvbb2u"/><path class="tn0k83bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:traffic-events"} {...others} />);
}

export default Component;
