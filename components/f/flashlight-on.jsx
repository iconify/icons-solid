import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wg9lcmw6v.css';
import '../../css/c/c7vu4eb-g.css';
import '../../css/k/kbndj12cr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wg9lcmw6v"/><path clip-rule="evenodd" class="c7vu4eb-g"/><path class="kbndj12cr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flashlight-on"} {...others} />);
}

export default Component;
