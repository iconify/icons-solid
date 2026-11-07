import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue6q9sbkc.css';
import '../../css/r/rl907-bqn.css';
import '../../css/y/ylj916f_v.css';
import '../../css/r/rj9tvvh9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue6q9sbkc"/><path class="rl907-bqn"/><path class="ylj916f_v"/><path class="rj9tvvh9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-check-bold-duotone"} {...others} />);
}

export default Component;
