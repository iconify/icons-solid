import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y0hv-pbtr.css';
import '../../css/s/s_kd59b_o.css';
import '../../css/b/byt4im-ru.css';
import '../../css/e/ejn2f72vs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y0hv-pbtr"/><path class="s_kd59b_o"/><path class="byt4im-ru"/><path clip-rule="evenodd" class="ejn2f72vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-outline"} {...others} />);
}

export default Component;
