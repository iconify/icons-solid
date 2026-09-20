import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbd3n5_5i.css';
import '../../css/q/qq-eglbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kbd3n5_5i"/><path clip-rule="evenodd" class="qq-eglbwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:new-chat"} {...others} />);
}

export default Component;
