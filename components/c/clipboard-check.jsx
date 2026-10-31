import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/v/v91ay4sjm.css';
import '../../css/j/jj33oabix.css';
import '../../css/x/xjufjhtdi.css';
import '../../css/i/ioitcibqk.css';
import '../../css/h/hhxm6kbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="v91ay4sjm"/><path class="jj33oabix"/><path class="xjufjhtdi"/><path class="ioitcibqk"/><path class="hhxm6kbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clipboard-check"} {...others} />);
}

export default Component;
