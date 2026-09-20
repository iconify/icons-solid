import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kk0vstd2z.css';
import '../../css/o/oj_mamo0x.css';
import '../../css/t/t15s7cbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kk0vstd2z"/><path class="oj_mamo0x"/><path clip-rule="evenodd" class="t15s7cbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-outline"} {...others} />);
}

export default Component;
