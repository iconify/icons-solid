import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfap67bii.css';
import '../../css/d/djs1zgads.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vfap67bii"/><path class="djs1zgads"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-start-sharp-duotone"} {...others} />);
}

export default Component;
