import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc5g2nboj.css';
import '../../css/s/s4u93xkgj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nc5g2nboj"/><path class="s4u93xkgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-engineering-lifecycle-mgmt"} {...others} />);
}

export default Component;
