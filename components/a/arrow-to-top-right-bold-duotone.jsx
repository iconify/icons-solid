import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1gzkvr5a.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hfqsmecof.css';
import '../../css/q/qb_h7yw5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u1gzkvr5a"/><g class="mc2zb0bvp"><path class="hfqsmecof"/><path class="qb_h7yw5a"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-top-right-bold-duotone"} {...others} />);
}

export default Component;
