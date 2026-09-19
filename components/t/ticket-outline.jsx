import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8t_6bcva.css';
import '../../css/q/q2cv_lb_w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h8t_6bcva"/><path class="q2cv_lb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ticket-outline"} {...others} />);
}

export default Component;
