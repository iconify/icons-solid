import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox0o5cc5d.css';
import '../../css/x/xrx5adcza.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="ox0o5cc5d"/><path class="xrx5adcza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:group-duotone"} {...others} />);
}

export default Component;
