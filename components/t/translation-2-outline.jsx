import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bom2j6ltg.css';
import '../../css/q/qzx8d-bpx.css';
import '../../css/y/ysalnkb3g.css';
import '../../css/q/qbm595m9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bom2j6ltg"/><path class="qzx8d-bpx"/><path clip-rule="evenodd" class="ysalnkb3g"/><path clip-rule="evenodd" class="qbm595m9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-outline"} {...others} />);
}

export default Component;
