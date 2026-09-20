import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv2gvylve.css';
import '../../css/f/fw8-r0bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yv2gvylve"/><path clip-rule="evenodd" class="fw8-r0bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wallet-cards-sharp-duotone"} {...others} />);
}

export default Component;
