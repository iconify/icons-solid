import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ksizx2blw.css';
import '../../css/c/c8zf9kbgu.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pztiu2bub.css';
import '../../css/j/j28658mae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ksizx2blw"/><path class="c8zf9kbgu"/><g class="mc2zb0bvp"><path class="pztiu2bub"/><path class="j28658mae"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-bold-duotone"} {...others} />);
}

export default Component;
