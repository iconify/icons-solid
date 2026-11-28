import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itafu2b5y.css';
import '../../css/a/a51d7tbhn.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="itafu2b5y"/><path class="a51d7tbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:copy-check-duotone"} {...others} />);
}

export default Component;
