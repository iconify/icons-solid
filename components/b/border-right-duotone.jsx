import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e26--2psv.css';
import '../../css/w/w61g679gl.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="e26--2psv"/><path class="w61g679gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:border-right-duotone"} {...others} />);
}

export default Component;
