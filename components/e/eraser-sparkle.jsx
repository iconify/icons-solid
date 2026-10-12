import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni5yzcc4r.css';
import '../../css/b/btgzemsrk.css';
import '../../css/s/so1hlw5no.css';
import '../../css/m/mi17ykb8a.css';
import '../../css/r/ru87loj5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ni5yzcc4r"/><rect transform="rotate(-45 32.75 1.17)scale(1 -1)" class="btgzemsrk"/><path class="so1hlw5no"/><path class="mi17ykb8a"/><path class="ru87loj5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eraser-sparkle"} {...others} />);
}

export default Component;
