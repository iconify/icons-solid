import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltr5xfg5u.css';
import '../../css/b/ba9dk-7yc.css';
import '../../css/b/b2b55bbxu.css';
import '../../css/k/kikcec1yl.css';
import '../../css/v/vplo5e_jn.css';
import '../../css/f/fous3qbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ltr5xfg5u"/><path class="ba9dk-7yc wm-a"/><path class="b2b55bbxu"/><path class="kikcec1yl wm-a"/><path class="vplo5e_jn"/><path class="fous3qbeq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:christmas-tree-duo"} {...others} />);
}

export default Component;
