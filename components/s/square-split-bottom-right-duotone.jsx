import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/msq_rxoiy.css';
import '../../css/u/uuxu63bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="msq_rxoiy secondary"/><path class="primary uuxu63bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-split-bottom-right-duotone"} {...others} />);
}

export default Component;
