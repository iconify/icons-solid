import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n49uhib3z.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n49uhib3z"/><path class="siai_tb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-unread-bold"} {...others} />);
}

export default Component;
