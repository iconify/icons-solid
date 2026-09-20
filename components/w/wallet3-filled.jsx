import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ut8cuhtwq.css';
import '../../css/k/kbs4yj5cx.css';
import '../../css/n/nzciehbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ut8cuhtwq"/><path class="kbs4yj5cx"/><path class="nzciehbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet3-filled"} {...others} />);
}

export default Component;
