import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nsf4icv8b.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jqsfrz9lo.css';
import '../../css/h/hd4nyobgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nsf4icv8b"/><g class="mc2zb0bvp"><path class="jqsfrz9lo"/><path class="hd4nyobgw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
