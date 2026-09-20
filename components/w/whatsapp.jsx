import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu0tkd7gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu0tkd7gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:whatsapp"} {...others} />);
}

export default Component;
