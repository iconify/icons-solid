import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg5g8obyv.css';
import '../../css/s/sgwj7m_pu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="sg5g8obyv"/><path class="sgwj7m_pu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:map-pin-slash-duotone"} {...others} />);
}

export default Component;
