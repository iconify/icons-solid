import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w31kx_5-k.css';
import '../../css/m/mgnycyfci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w31kx_5-k"/><path class="mgnycyfci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-whatsapp-square"} {...others} />);
}

export default Component;
