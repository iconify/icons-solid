import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9b7cp_uc.css';
import '../../css/k/kg8_1mbve.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="s9b7cp_uc"/><path class="kg8_1mbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:wrench-adjustable-circle"} {...others} />);
}

export default Component;
