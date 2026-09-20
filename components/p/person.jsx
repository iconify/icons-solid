import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7yxgulse.css';
import '../../css/v/vq3ubub7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q7yxgulse"/><path clip-rule="evenodd" class="vq3ubub7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:person"} {...others} />);
}

export default Component;
