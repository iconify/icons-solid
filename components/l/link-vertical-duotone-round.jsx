import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7adc9b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7adc9b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-vertical-duotone-round"} {...others} />);
}

export default Component;
