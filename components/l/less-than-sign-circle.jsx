import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf2sdebss.css';
import '../../css/o/olccmib3h.css';
import '../../css/j/jfcck1brq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hf2sdebss"/><path class="olccmib3h"/><path class="jfcck1brq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:less-than-sign-circle"} {...others} />);
}

export default Component;
