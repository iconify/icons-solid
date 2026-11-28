import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lg7rofggi.css';
import '../../css/a/ack6o5ijv.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="lg7rofggi"/><path class="ack6o5ijv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:forward-10-duotone"} {...others} />);
}

export default Component;
