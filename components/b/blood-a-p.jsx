import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y200nyy4c.css';
import '../../css/t/tn5vw1rfn.css';
import '../../css/c/cmpm5kb0f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y200nyy4c"/><path class="tn5vw1rfn"/><path clip-rule="evenodd" class="cmpm5kb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-a-p"} {...others} />);
}

export default Component;
