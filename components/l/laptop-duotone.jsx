import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9e7oqb2b.css';
import '../../css/v/vn71wy-bl.css';
import '../../css/t/t0dlfk87e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m9e7oqb2b"/><path clip-rule="evenodd" class="vn71wy-bl"/><path class="t0dlfk87e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:laptop-duotone"} {...others} />);
}

export default Component;
