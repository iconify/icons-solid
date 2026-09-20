import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8-gi9vyb.css';
import '../../css/r/rceiv1tin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n8-gi9vyb"/><path clip-rule="evenodd" class="rceiv1tin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-sharp-duotone"} {...others} />);
}

export default Component;
