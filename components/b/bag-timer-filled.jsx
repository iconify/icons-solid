import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elbxrch6e.css';
import '../../css/u/uy6yb8bal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="elbxrch6e"/><path class="uy6yb8bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-timer-filled"} {...others} />);
}

export default Component;
