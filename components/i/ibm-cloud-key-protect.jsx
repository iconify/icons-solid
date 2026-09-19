import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mre-spuzg.css';
import '../../css/r/rwhb52b3s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mre-spuzg"/><path class="rwhb52b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-key-protect"} {...others} />);
}

export default Component;
