import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7cz4mnsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h7cz4mnsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scan-face-duotone-round"} {...others} />);
}

export default Component;
