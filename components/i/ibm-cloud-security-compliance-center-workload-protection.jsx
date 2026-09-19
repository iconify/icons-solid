import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almjracyr.css';
import '../../css/l/la0xxkb4z.css';
import '../../css/n/n0jc1kb2y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="almjracyr"/><path class="la0xxkb4z"/><path class="n0jc1kb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-security-compliance-center-workload-protection"} {...others} />);
}

export default Component;
