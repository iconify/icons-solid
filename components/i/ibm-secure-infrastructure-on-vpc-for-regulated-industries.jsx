import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvi-a0bav.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kvi-a0bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-secure-infrastructure-on-vpc-for-regulated-industries"} {...others} />);
}

export default Component;
