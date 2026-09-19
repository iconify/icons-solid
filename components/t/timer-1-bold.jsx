import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fer6iobvf.css';
import '../../css/l/lh95obbwd.css';
import '../../css/h/hyu-j45la.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fer6iobvf"/><path clip-rule="evenodd" class="lh95obbwd"/><path class="hyu-j45la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-1-bold"} {...others} />);
}

export default Component;
