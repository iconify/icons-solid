import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zlwo8vk7z.css';
import '../../css/k/km9xt0bvl.css';
import '../../css/c/c-n-9gpof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zlwo8vk7z"/><path class="km9xt0bvl wm-a"/><path class="c-n-9gpof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-drive-duo"} {...others} />);
}

export default Component;
