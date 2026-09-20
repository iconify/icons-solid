import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssbhracgn.css';
import '../../css/t/thmn1rbuy.css';
import '../../css/q/q0vsi9y8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ssbhracgn"/><path class="thmn1rbuy"/><path class="q0vsi9y8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bookmark-open-duotone"} {...others} />);
}

export default Component;
