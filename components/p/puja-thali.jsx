import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l9kx8zb0x.css';
import '../../css/f/f-u9qsbvc.css';
import '../../css/q/quyocr0ug.css';
import '../../css/k/katwdi_0m.css';
import '../../css/m/mbfjzwhxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l9kx8zb0x wm-shadow"/><path class="f-u9qsbvc wm-shadow"/><path class="quyocr0ug"/><path class="katwdi_0m"/><path class="mbfjzwhxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:puja-thali"} {...others} />);
}

export default Component;
