import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufhc7d9py.css';
import '../../css/m/m5jrbobfk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="ufhc7d9py"/><path class="m5jrbobfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:wc-duotone"} {...others} />);
}

export default Component;
