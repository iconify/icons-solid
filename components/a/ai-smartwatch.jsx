import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/am_u226-o.css';
import '../../css/x/xn8jdabvx.css';
import '../../css/l/lpx543bxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="am_u226-o"/><path class="xn8jdabvx"/><path class="lpx543bxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-smartwatch"} {...others} />);
}

export default Component;
