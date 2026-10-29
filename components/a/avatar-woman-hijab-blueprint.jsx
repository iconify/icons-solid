import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ajhb_2gna.css';
import '../../css/k/knd1ndbxd.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/i/i44mt3bkm.css';
import '../../css/u/unaydcb4r.css';
import '../../css/k/kj6rodbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ajhb_2gna wm-deco"/><path class="knd1ndbxd wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="i44mt3bkm wm-k"/><path class="unaydcb4r wm-a"/><path class="kj6rodbmy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-hijab-blueprint"} {...others} />);
}

export default Component;
