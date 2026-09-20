import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhpyfvb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhpyfvb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:menu-unfold-3-fill"} {...others} />);
}

export default Component;
