import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbe4gqq1v.css';
import '../../css/i/i_j7eob-z.css';
import '../../css/h/hjslqggbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cbe4gqq1v"/><path class="i_j7eob-z"/><path class="hjslqggbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-2-bold-duotone"} {...others} />);
}

export default Component;
