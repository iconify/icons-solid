import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn5c_ac-c.css';
import '../../css/a/a71n0cp7w.css';
import '../../css/n/nvedv7b7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nn5c_ac-c"/><path class="a71n0cp7w"/><path class="nvedv7b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:truck-line"} {...others} />);
}

export default Component;
