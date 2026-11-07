import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0u7hix8w.css';
import '../../css/y/ylj916f_v.css';
import '../../css/t/ti3hk-btz.css';
import '../../css/u/ue6q9sbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0u7hix8w"/><path class="ylj916f_v"/><path class="ti3hk-btz"/><path class="ue6q9sbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-plus-bold-duotone"} {...others} />);
}

export default Component;
