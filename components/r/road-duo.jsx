import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zksu7dn2w.css';
import '../../css/y/yt1oy9ckg.css';
import '../../css/i/iyrbwab4q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zksu7dn2w"/><path class="yt1oy9ckg"/><path class="iyrbwab4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:road-duo"} {...others} />);
}

export default Component;
