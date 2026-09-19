import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc5crhb4x.css';
import '../../css/y/yno1x_b-o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wc5crhb4x"/><path class="yno1x_b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-hyper-protect-vs"} {...others} />);
}

export default Component;
