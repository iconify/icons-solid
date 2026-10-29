import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j9p_os87x.css';
import '../../css/v/vjpnyegoq.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/m/mujhne3lv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j9p_os87x wm-a"/><path class="vjpnyegoq wm-a"/><path class="l9lv5_bcf"/><path class="mujhne3lv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-eye-duo"} {...others} />);
}

export default Component;
