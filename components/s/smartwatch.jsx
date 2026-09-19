import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1-rf78se.css';
import '../../css/l/l5_xm646v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="c1-rf78se"/><path class="l5_xm646v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:smartwatch"} {...others} />);
}

export default Component;
