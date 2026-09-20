import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/ndhz-8whp.css';
import '../../css/b/bkhro2btp.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ndhz-8whp"/><path class="bkhro2btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:battery-charging"} {...others} />);
}

export default Component;
