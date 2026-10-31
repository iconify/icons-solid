import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i58bp5-ij.css';
import '../../css/b/bka9enboo.css';
import '../../css/o/ow42osrqo.css';
import '../../css/g/gvzshsp7q.css';
import '../../css/q/qn6rjkb2i.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i58bp5-ij wm-shadow"/><path class="bka9enboo wm-shadow"/><path class="ow42osrqo"/><path class="gvzshsp7q"/><path class="qn6rjkb2i"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:image-off"} {...others} />);
}

export default Component;
