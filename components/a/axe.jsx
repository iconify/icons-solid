import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hne11ibsr.css';
import '../../css/l/lb8hj9bbj.css';
import '../../css/m/mz8gxwbqy.css';
import '../../css/v/vku-jgsjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hne11ibsr wm-shadow"/><path class="lb8hj9bbj wm-shadow"/><path class="mz8gxwbqy"/><path class="vku-jgsjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:axe"} {...others} />);
}

export default Component;
