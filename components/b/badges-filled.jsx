import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qqdx3fopl.css';
import '../../css/i/i-m_ll3wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qqdx3fopl"/><path class="i-m_ll3wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:badges-filled"} {...others} />);
}

export default Component;
