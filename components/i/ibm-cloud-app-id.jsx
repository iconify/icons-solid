import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koq8s9beh.css';
import '../../css/k/kpiwvfbeo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="koq8s9beh"/><path class="kpiwvfbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-app-id"} {...others} />);
}

export default Component;
