import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjzuz0oew.css';
import '../../css/d/dfd8n3ylg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjzuz0oew"/><path clip-rule="evenodd" class="dfd8n3ylg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-bing-outline"} {...others} />);
}

export default Component;
