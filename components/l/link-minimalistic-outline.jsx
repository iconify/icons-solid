import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar6svccon.css';
import '../../css/l/l0xja2b0d.css';
import '../../css/c/c6yv8di5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ar6svccon"/><path class="l0xja2b0d"/><path class="c6yv8di5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-outline"} {...others} />);
}

export default Component;
