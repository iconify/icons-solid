import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ss13veb9o.css';
import '../../css/w/w6ei_8b5u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ss13veb9o"/><path clip-rule="evenodd" class="w6ei_8b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:person-filled"} {...others} />);
}

export default Component;
