import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_owy1dlv.css';
import '../../css/a/a1dbd2dld.css';
import '../../css/e/ekllxobep.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="t_owy1dlv"/><path class="a1dbd2dld"/><path class="ekllxobep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:window-x"} {...others} />);
}

export default Component;
