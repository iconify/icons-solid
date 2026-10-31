import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nq17oqb-w.css';
import '../../css/j/j5bz35b4l.css';
import '../../css/n/n4kf-l4ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nq17oqb-w wm-k"/><path class="j5bz35b4l wm-a"/><path class="n4kf-l4ki wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sort-alpha"} {...others} />);
}

export default Component;
