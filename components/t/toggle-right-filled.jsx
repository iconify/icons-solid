import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/almv6ub9v.css';
import '../../css/e/el0g6e8eh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="almv6ub9v"/><path class="el0g6e8eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:toggle-right-filled"} {...others} />);
}

export default Component;
