import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsqk_tbdk.css';
import '../../css/b/b51spkb3i.css';
import '../../css/v/vg-71rbns.css';
import '../../css/c/csnlu8l7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wsqk_tbdk"/><path class="b51spkb3i"/><path class="vg-71rbns"/><path class="csnlu8l7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-code-bold-duotone"} {...others} />);
}

export default Component;
