import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv2sj7z_t.css';
import '../../css/b/b6x92hbvb.css';
import '../../css/v/vk5wnopgr.css';
import '../../css/m/mtyofsw1u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iv2sj7z_t"/><path clip-rule="evenodd" class="b6x92hbvb"/><path class="vk5wnopgr"/><path class="mtyofsw1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:television-off"} {...others} />);
}

export default Component;
