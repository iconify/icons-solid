import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zmx3w_bje.css';
import '../../css/j/j5bz35b4l.css';
import '../../css/o/oa0ee2qqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k zmx3w_bje"/><path class="j5bz35b4l wm-a"/><path class="oa0ee2qqb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sort"} {...others} />);
}

export default Component;
