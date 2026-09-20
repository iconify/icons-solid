import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjxgzubin.css';
import '../../css/a/awda-kznv.css';
import '../../css/a/axu19ccpr.css';
import '../../css/h/httstt_8v.css';
import '../../css/h/hta7xqm4w.css';
import '../../css/l/l9dbtrbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jjxgzubin"/><path class="awda-kznv"/><path class="axu19ccpr"/><g clip-rule="evenodd" class="httstt_8v"><path class="hta7xqm4w"/><path class="l9dbtrbok"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
