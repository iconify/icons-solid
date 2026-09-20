import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/if838_bko.css';
import '../../css/z/z59g61bbc.css';
import '../../css/l/l788tm9oc.css';
import '../../css/j/jhb5hjq3f.css';
import '../../css/t/twhx2sbps.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="if838_bko"/><path clip-rule="evenodd" class="z59g61bbc"/><path clip-rule="evenodd" class="l788tm9oc"/><path clip-rule="evenodd" class="jhb5hjq3f"/><path clip-rule="evenodd" class="twhx2sbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:leave"} {...others} />);
}

export default Component;
