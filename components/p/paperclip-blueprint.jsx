import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pnw747ntt.css';
import '../../css/r/rz1izdbtt.css';
import '../../css/e/e8u9hlbvz.css';
import '../../css/v/vo6e5ybat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pnw747ntt wm-deco"/><path class="rz1izdbtt wm-deco"/><path class="e8u9hlbvz"/><path class="vo6e5ybat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paperclip-blueprint"} {...others} />);
}

export default Component;
