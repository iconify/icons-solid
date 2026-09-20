import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbx_0ehqn.css';
import '../../css/r/r3gix9sqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tbx_0ehqn"/><path class="r3gix9sqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notif-remove"} {...others} />);
}

export default Component;
