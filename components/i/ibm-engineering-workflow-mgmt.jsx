import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvccdfbpr.css';
import '../../css/s/s229knb7k.css';
import '../../css/e/e1jcxhbna.css';
import '../../css/i/i-sniivkv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pvccdfbpr"/><circle class="s229knb7k"/><circle class="e1jcxhbna"/><circle class="i-sniivkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-engineering-workflow-mgmt"} {...others} />);
}

export default Component;
