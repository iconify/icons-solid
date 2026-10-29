import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n46wi0c5u.css';
import '../../css/d/d-hyx6bgt.css';
import '../../css/p/p2z5jzwkd.css';
import '../../css/z/zuwye0jyw.css';
import '../../css/j/jcynq0brq.css';
import '../../css/n/nhict5b3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n46wi0c5u wm-deco"/><path class="d-hyx6bgt wm-deco"/><path class="p2z5jzwkd wm-k"/><path class="wm-a zuwye0jyw"/><path class="jcynq0brq wm-k"/><path class="nhict5b3l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-all-blueprint"} {...others} />);
}

export default Component;
