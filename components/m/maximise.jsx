import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/s/s-t8kdbfg.css';
import '../../css/j/j9ml2vbvl.css';
import '../../css/e/eelfzzviu.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="s-t8kdbfg"/><path class="j9ml2vbvl"/><path class="eelfzzviu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:maximise"} {...others} />);
}

export default Component;
