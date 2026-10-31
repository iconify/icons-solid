import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g5zq04b3u.css';
import '../../css/z/zdu34pbgi.css';
import '../../css/b/bbj5cibiu.css';
import '../../css/g/g_3i-5a_q.css';
import '../../css/o/op091ia4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g5zq04b3u"/><path class="wm-shine zdu34pbgi"/><path class="bbj5cibiu wm-k"/><path class="g_3i-5a_q wm-a"/><path class="op091ia4u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:banknote"} {...others} />);
}

export default Component;
