import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd-n0bc9l.css';
import '../../css/u/u3ceux_oy.css';
import '../../css/y/yb8gifd6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wd-n0bc9l"/><path clip-rule="evenodd" class="u3ceux_oy"/><path clip-rule="evenodd" class="yb8gifd6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:medical-kit-duotone"} {...others} />);
}

export default Component;
