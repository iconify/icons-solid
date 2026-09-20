import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkweptp2s.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/a0p-cgb0r.css';
import '../../css/j/jw4a19nsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zkweptp2s"/><g class="mc2zb0bvp"><path class="a0p-cgb0r"/><path class="jw4a19nsd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-bold-duotone"} {...others} />);
}

export default Component;
