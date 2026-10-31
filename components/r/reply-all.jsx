import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e-vo4ab5q.css';
import '../../css/i/i95lw_nwp.css';
import '../../css/o/og5669pjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="e-vo4ab5q wm-k"/><path class="i95lw_nwp wm-a"/><path class="og5669pjp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:reply-all"} {...others} />);
}

export default Component;
