import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a_u72_okn.css';
import '../../css/h/h4o1pabcz.css';
import '../../css/a/a8tt1dsgl.css';
import '../../css/z/zpd26ob0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="a_u72_okn wm-deco"/><path class="h4o1pabcz wm-deco"/><path class="a8tt1dsgl wm-k"/><path class="wm-a zpd26ob0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-blueprint"} {...others} />);
}

export default Component;
