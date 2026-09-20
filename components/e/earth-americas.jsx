import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cwxcpwbap.css';
import '../../css/p/pconk8xhp.css';
import '../../css/j/ji-rb-6hf.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cwxcpwbap"/><path class="pconk8xhp"/><path class="ji-rb-6hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:earth-americas"} {...others} />);
}

export default Component;
