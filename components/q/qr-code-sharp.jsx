import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gxf7-0b7r.css';
import '../../css/m/msxn8u5pj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="gxf7-0b7r"/><path class="msxn8u5pj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:qr-code-sharp"} {...others} />);
}

export default Component;
