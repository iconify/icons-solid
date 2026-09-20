import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jatd2sbse.css';
import '../../css/t/tgxulxmfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jatd2sbse"/><path class="tgxulxmfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:open-external"} {...others} />);
}

export default Component;
