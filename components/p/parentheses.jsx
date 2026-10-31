import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v-6eycb-t.css';
import '../../css/p/ph03dzrjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v-6eycb-t"/><path class="ph03dzrjf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:parentheses"} {...others} />);
}

export default Component;
