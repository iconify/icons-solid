import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4_vrm0lk.css';
import '../../css/f/f7hp6ub0o.css';
import '../../css/e/e1bwoaccw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b4_vrm0lk"/><path class="f7hp6ub0o"/><path class="e1bwoaccw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:envelope-right-filled"} {...others} />);
}

export default Component;
