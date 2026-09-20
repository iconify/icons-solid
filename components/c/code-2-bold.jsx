import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp1rrpeww.css';
import '../../css/d/d5m5erb7b.css';
import '../../css/r/r5amh2b-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wp1rrpeww"/><path class="d5m5erb7b"/><path class="r5amh2b-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-2-bold"} {...others} />);
}

export default Component;
