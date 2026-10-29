import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x44yigbze.css';
import '../../css/i/i_f4htplx.css';
import '../../css/l/lxqkkqmys.css';
import '../../css/t/td49gbbjb.css';
import '../../css/j/j314kuthn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x44yigbze"/><path class="i_f4htplx wm-a"/><path class="lxqkkqmys"/><path class="td49gbbjb"/><path class="j314kuthn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-duo"} {...others} />);
}

export default Component;
