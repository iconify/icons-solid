import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/blv594jsg.css';
import '../../css/v/v_zpi5bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="blv594jsg"/><path class="v_zpi5bkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-user-01"} {...others} />);
}

export default Component;
