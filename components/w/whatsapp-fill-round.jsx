import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8k_y-jda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8k_y-jda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:whatsapp-fill-round"} {...others} />);
}

export default Component;
