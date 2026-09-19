import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwjzqebfb.css';
import '../../css/e/e4snvjyzq.css';
import '../../css/o/oh_sxl0hj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kwjzqebfb"/><path class="e4snvjyzq"/><path class="oh_sxl0hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hl7-attributes"} {...others} />);
}

export default Component;
