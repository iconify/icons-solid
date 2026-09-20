import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g800-kbwc.css';
import '../../css/v/vl3-ksbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g800-kbwc"/><path clip-rule="evenodd" class="vl3-ksbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:unlock"} {...others} />);
}

export default Component;
