import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hw5l17qef.css';
import '../../css/k/kgvwdybzv.css';
import '../../css/p/pr4hfob0i.css';
import '../../css/t/t1hpgfxns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hw5l17qef"/><path class="kgvwdybzv wm-a"/><path class="pr4hfob0i"/><path class="t1hpgfxns wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:luggage-duo"} {...others} />);
}

export default Component;
