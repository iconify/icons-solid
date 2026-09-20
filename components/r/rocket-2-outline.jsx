import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t27cabfth.css';
import '../../css/j/jnh8v4__b.css';
import '../../css/i/i_i5dbbik.css';
import '../../css/c/c_0_fk0_e.css';
import '../../css/d/di3vbfbaf.css';
import '../../css/w/w1vu-0bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t27cabfth"/><path class="jnh8v4__b"/><path class="i_i5dbbik"/><path class="c_0_fk0_e"/><path class="di3vbfbaf"/><path clip-rule="evenodd" class="w1vu-0bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-outline"} {...others} />);
}

export default Component;
