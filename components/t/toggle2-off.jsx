import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqm1unbbv.css';
import '../../css/i/i_rnndbgt.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="cqm1unbbv"/><path class="i_rnndbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:toggle2-off"} {...others} />);
}

export default Component;
