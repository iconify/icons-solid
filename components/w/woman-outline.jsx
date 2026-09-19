import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft8aas7is.css';
import '../../css/h/h_gg3_bew.css';
import '../../css/o/o0lqhvmmi.css';
import '../../css/k/k8brvnbck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ft8aas7is"/><path class="h_gg3_bew"/><circle class="o0lqhvmmi"/><path class="k8brvnbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:woman-outline"} {...others} />);
}

export default Component;
