import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiyimhb6h.css';
import '../../css/j/jtxralboh.css';
import '../../css/u/uy-17uotp.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/n/njh4w5btz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oiyimhb6h"/><path class="jtxralboh"/><path class="uy-17uotp"/><path class="xjfc-xbtr"/><path class="njh4w5btz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-angry"} {...others} />);
}

export default Component;
