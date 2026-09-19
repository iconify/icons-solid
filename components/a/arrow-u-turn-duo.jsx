import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_9g-3b4q.css';
import '../../css/y/y-o-86bhb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w_9g-3b4q"/><path class="y-o-86bhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-u-turn-duo"} {...others} />);
}

export default Component;
