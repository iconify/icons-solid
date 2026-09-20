import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tb8_i_qfq.css';
import '../../css/a/acnmh7b9b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="tb8_i_qfq"/><path class="acnmh7b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:location-pin-medical-hospital-2"} {...others} />);
}

export default Component;
