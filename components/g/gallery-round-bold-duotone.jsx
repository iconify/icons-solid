import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0tsxrhtd.css';
import '../../css/d/d6gur6bsq.css';
import '../../css/y/y_8irlb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c0tsxrhtd"/><path clip-rule="evenodd" class="d6gur6bsq"/><path class="y_8irlb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-round-bold-duotone"} {...others} />);
}

export default Component;
