import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtp3hzbje.css';
import '../../css/t/tw9pjxlco.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wtp3hzbje"/><path class="tw9pjxlco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-internet-services"} {...others} />);
}

export default Component;
