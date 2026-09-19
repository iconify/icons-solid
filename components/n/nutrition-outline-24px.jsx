import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzlj-eb-w.css';
import '../../css/b/b-45hkb_r.css';
import '../../css/h/hcipdc97e.css';
import '../../css/j/j2j7__bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wzlj-eb-w"/><path class="b-45hkb_r"/><path clip-rule="evenodd" class="hcipdc97e"/><path class="j2j7__bqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nutrition-outline-24px"} {...others} />);
}

export default Component;
