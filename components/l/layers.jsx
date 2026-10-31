import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rxeo7nbny.css';
import '../../css/r/rl8z-b_vt.css';
import '../../css/c/cwbtl7epz.css';
import '../../css/d/dds8dacon.css';
import '../../css/z/zhi9dcc5l.css';
import '../../css/a/ay1q997se.css';
import '../../css/l/lxhp_db1z.css';
import '../../css/z/z5-u5nzgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rxeo7nbny"/><path class="rl8z-b_vt"/><path class="cwbtl7epz wm-shine"/><path class="dds8dacon wm-k"/><path class="wm-a zhi9dcc5l"/><path class="ay1q997se"/><path class="lxhp_db1z"/><path class="wm-shine z5-u5nzgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:layers"} {...others} />);
}

export default Component;
