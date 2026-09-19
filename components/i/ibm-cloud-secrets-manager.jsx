import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv6t6jgex.css';
import '../../css/j/j8hf9v3cp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xv6t6jgex"/><path class="j8hf9v3cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-secrets-manager"} {...others} />);
}

export default Component;
