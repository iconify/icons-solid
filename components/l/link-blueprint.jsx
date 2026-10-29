import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cl67d3edb.css';
import '../../css/d/d8p35_05q.css';
import '../../css/j/jy1aez1fn.css';
import '../../css/m/mgmiowbmj.css';
import '../../css/j/jcfvhdnpn.css';
import '../../css/f/fk_x1neis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cl67d3edb wm-deco"/><path class="d8p35_05q wm-deco"/><path class="jy1aez1fn wm-k"/><path class="mgmiowbmj wm-a"/><path class="jcfvhdnpn wm-k"/><path class="fk_x1neis wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:link-blueprint"} {...others} />);
}

export default Component;
