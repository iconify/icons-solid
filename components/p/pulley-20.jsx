import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu-0p7bqd.css';
import '../../css/w/w15l_846s.css';
import '../../css/x/xt4wfpdse.css';
import '../../css/e/e_o92zbrm.css';
import '../../css/e/e_awkjb1m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hu-0p7bqd"/><path class="w15l_846s"/><path class="xt4wfpdse"/><path class="e_o92zbrm"/><path class="e_awkjb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pulley-20"} {...others} />);
}

export default Component;
