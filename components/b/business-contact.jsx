import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcp9_yb1l.css';
import '../../css/l/lgxe0o1ax.css';
import '../../css/t/tm9f74uep.css';
import '../../css/l/l_q0npboa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jcp9_yb1l"/><g class="lgxe0o1ax"><circle class="tm9f74uep"/><path class="l_q0npboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:business-contact"} {...others} />);
}

export default Component;
