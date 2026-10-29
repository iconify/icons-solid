import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ewou_cb1d.css';
import '../../css/w/wpx2v_c8k.css';
import '../../css/k/k1xf4_bso.css';
import '../../css/u/ukf9b-bih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ewou_cb1d"/><path class="wpx2v_c8k"/><path class="k1xf4_bso wm-a"/><path class="ukf9b-bih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-penguin"} {...others} />);
}

export default Component;
