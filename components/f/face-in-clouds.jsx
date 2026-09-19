import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnk_qpb6q.css';
import '../../css/z/z8s6s_bep.css';
import '../../css/r/rwyjc5fvx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mnk_qpb6q"/><path class="z8s6s_bep"/><path class="rwyjc5fvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-in-clouds"} {...others} />);
}

export default Component;
