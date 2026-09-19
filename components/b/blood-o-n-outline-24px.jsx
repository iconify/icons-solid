import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/loxyoccpf.css';
import '../../css/q/q-ba_wsrb.css';
import '../../css/v/v4s2axqse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="loxyoccpf"/><path class="q-ba_wsrb"/><path clip-rule="evenodd" class="v4s2axqse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-o-n-outline-24px"} {...others} />);
}

export default Component;
