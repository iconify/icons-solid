import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whwf_s5on.css';
import '../../css/o/op-uyebei.css';
import '../../css/c/c0q-ydf9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="whwf_s5on"/><path class="op-uyebei"/><path class="c0q-ydf9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-off-outline"} {...others} />);
}

export default Component;
