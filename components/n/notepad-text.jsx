import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2fycmvqi.css';
import '../../css/t/tnmwlx7mo.css';
import '../../css/x/xxyusyr1l.css';
import '../../css/w/wdyh28kzi.css';
import '../../css/x/xt-w53bzf.css';
import '../../css/r/ry6zs7yln.css';
import '../../css/y/yh-p0hb8z.css';
import '../../css/j/j0ec1-bpy.css';
import '../../css/u/umt-u4b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2fycmvqi wm-shadow"/><path class="tnmwlx7mo wm-k"/><path class="wm-k xxyusyr1l"/><path class="wdyh28kzi wm-k"/><path class="wm-k xt-w53bzf"/><path class="ry6zs7yln wm-k"/><path class="wm-shine yh-p0hb8z"/><path class="j0ec1-bpy wm-a"/><path class="umt-u4b7z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:notepad-text"} {...others} />);
}

export default Component;
