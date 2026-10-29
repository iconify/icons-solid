import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jd59erb6t.css';
import '../../css/a/a3k-1f3du.css';
import '../../css/x/xv2fgjbuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jd59erb6t wm-deco"/><path class="a3k-1f3du wm-deco"/><path class="xv2fgjbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pause-blueprint"} {...others} />);
}

export default Component;
