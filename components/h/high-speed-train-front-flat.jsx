import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q3r7l856c.css';
import '../../css/f/frvb35qqr.css';
import '../../css/h/h0aue6b3g.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q3r7l856c"/><path class="frvb35qqr"/><path class="h0aue6b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:high-speed-train-front-flat"} {...others} />);
}

export default Component;
