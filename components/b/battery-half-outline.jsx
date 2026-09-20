import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swy3tebjf.css';
import '../../css/e/e5m4qbbih.css';
import '../../css/b/bku0ur4-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="swy3tebjf"/><path class="e5m4qbbih"/><path clip-rule="evenodd" class="bku0ur4-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-outline"} {...others} />);
}

export default Component;
