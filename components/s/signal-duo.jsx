import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/go3vulb-s.css';
import '../../css/g/gy5vykbhv.css';
import '../../css/z/zmoj875uh.css';
import '../../css/t/t6bi9x8gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="go3vulb-s"/><path class="gy5vykbhv"/><path class="zmoj875uh"/><path class="t6bi9x8gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:signal-duo"} {...others} />);
}

export default Component;
