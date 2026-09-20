import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k_qjhvpku.css';
import '../../css/g/gwzcxibji.css';
import '../../css/u/u9qv1uges.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k_qjhvpku"/><path class="gwzcxibji"/><path class="u9qv1uges"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-circle-outline"} {...others} />);
}

export default Component;
