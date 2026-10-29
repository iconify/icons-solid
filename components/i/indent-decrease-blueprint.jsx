import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fci6hf7ny.css';
import '../../css/m/mhdr543mh.css';
import '../../css/e/e18g5nbpy.css';
import '../../css/n/nuq9sybcn.css';
import '../../css/e/e166uhm4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fci6hf7ny wm-deco"/><path class="mhdr543mh wm-deco"/><path class="e18g5nbpy wm-k"/><path class="nuq9sybcn wm-a"/><path class="e166uhm4q wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:indent-decrease-blueprint"} {...others} />);
}

export default Component;
