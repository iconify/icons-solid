import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/obx052bri.css';
import '../../css/b/b399byz-b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="obx052bri"/><path clip-rule="evenodd" class="b399byz-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:discount-bold"} {...others} />);
}

export default Component;
