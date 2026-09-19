import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgcub9bay.css';
import '../../css/l/l1t_ahb_b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="bgcub9bay"/><path class="l1t_ahb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:hdmi"} {...others} />);
}

export default Component;
