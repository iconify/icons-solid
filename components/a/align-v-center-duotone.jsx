import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmx68bcvb.css';
import '../../css/d/d80mrlb0r.css';
import '../../css/i/i82-rac-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nmx68bcvb"/><path class="d80mrlb0r"/><path class="i82-rac-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-v-center-duotone"} {...others} />);
}

export default Component;
