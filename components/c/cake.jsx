import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdy72es9s.css';
import '../../css/v/vohc652nk.css';
import '../../css/x/xwgeh-5vu.css';
import '../../css/j/j9f8x-bhy.css';
import '../../css/y/y8y43dbhl.css';
import '../../css/r/r4krf7bah.css';
import '../../css/g/glncqpt8q.css';
import '../../css/w/w4z_e2byn.css';
import '../../css/x/xqg6k65st.css';
import '../../css/p/pbctw38if.css';
import '../../css/d/dwqn8accy.css';
import '../../css/r/rzkv04jgy.css';
import '../../css/u/uanmmverh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="rdy72es9s"><path class="vohc652nk"/><path class="xwgeh-5vu"/><path class="j9f8x-bhy"/><path class="y8y43dbhl"/><path class="r4krf7bah"/><path class="glncqpt8q"/><path class="w4z_e2byn"/><path class="xqg6k65st"/><path class="pbctw38if"/><path class="dwqn8accy"/><path class="rzkv04jgy"/><path class="uanmmverh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:cake"} {...others} />);
}

export default Component;
