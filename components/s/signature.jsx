import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z1gf-w-er.css';
import '../../css/q/qjoi1kboe.css';
import '../../css/s/s0kcf3b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k z1gf-w-er"/><path class="qjoi1kboe wm-a"/><path class="s0kcf3b3u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:signature"} {...others} />);
}

export default Component;
