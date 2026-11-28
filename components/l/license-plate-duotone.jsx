import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb9jqsbfr.css';
import '../../css/e/eyn4gabra.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="nb9jqsbfr"/><path class="eyn4gabra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:license-plate-duotone"} {...others} />);
}

export default Component;
