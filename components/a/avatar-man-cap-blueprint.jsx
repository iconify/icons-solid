import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ekybxd9od.css';
import '../../css/b/b-q54fbrr.css';
import '../../css/z/z8zq0dbco.css';
import '../../css/k/kqp1rrbac.css';
import '../../css/k/kfn5s-bjs.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ekybxd9od wm-deco"/><path class="b-q54fbrr wm-deco"/><path class="wm-deco z8zq0dbco"/><path class="kqp1rrbac wm-k"/><path class="kfn5s-bjs wm-a"/><path class="vildi5bvg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-cap-blueprint"} {...others} />);
}

export default Component;
