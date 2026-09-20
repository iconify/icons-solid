import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vak5zrb_p.css';
import '../../css/u/uhj5_jbkq.css';
import '../../css/q/q4x_57byx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="vak5zrb_p"/><path class="uhj5_jbkq"/><path class="q4x_57byx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:user-chat-2"} {...others} />);
}

export default Component;
