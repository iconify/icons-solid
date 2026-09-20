import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wpwt_zkck.css';
import '../../css/e/e89p18b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wpwt_zkck"/><path class="e89p18b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-end-sharp-duotone"} {...others} />);
}

export default Component;
