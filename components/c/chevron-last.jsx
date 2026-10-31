import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ln0kt8b-x.css';
import '../../css/z/zhjtmfbrj.css';
import '../../css/s/s0kcf3b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ln0kt8b-x wm-k"/><path class="wm-a zhjtmfbrj"/><path class="s0kcf3b3u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chevron-last"} {...others} />);
}

export default Component;
