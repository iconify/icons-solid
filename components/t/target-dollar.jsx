import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7ch5-btn.css';
import '../../css/d/dplfhlbcd.css';
import '../../css/q/qwwylplcg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o7ch5-btn"/><path class="dplfhlbcd"/><path class="qwwylplcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:target-dollar"} {...others} />);
}

export default Component;
