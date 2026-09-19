import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g39ybsbwu.css';
import '../../css/l/lo5cwabix.css';
import '../../css/a/a8g_sshhh.css';
import '../../css/p/pwb2h2p_t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="g39ybsbwu"/><path class="lo5cwabix"/><path class="a8g_sshhh"/><path class="pwb2h2p_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fishing"} {...others} />);
}

export default Component;
