import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z44agkbpy.css';
import '../../css/j/jau85fmhu.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kbpgquogb.css';
import '../../css/c/c-z2as80v.css';
import '../../css/p/p6n9a1t9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z44agkbpy"/><path class="jau85fmhu"/><g class="mc2zb0bvp"><path class="kbpgquogb"/><path class="c-z2as80v"/><path class="p6n9a1t9g"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-small-bold-duotone"} {...others} />);
}

export default Component;
