import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpp_4zwkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpp_4zwkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:chat-quote-fill"} {...others} />);
}

export default Component;
