import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/j/jbevh8ikd.css';
import '../../css/t/tdv22nbus.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="jbevh8ikd"/><path class="tdv22nbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:microphone"} {...others} />);
}

export default Component;
