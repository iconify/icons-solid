import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/a/apkg3mbvy.css';
import '../../css/o/opiftm88q.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="apkg3mbvy"/><path class="opiftm88q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:refresh-alt"} {...others} />);
}

export default Component;
