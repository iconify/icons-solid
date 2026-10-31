import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bd0osc6-a.css';
import '../../css/a/ahyvrkbbo.css';
import '../../css/d/dyq367b8g.css';
import '../../css/a/as11b96td.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bd0osc6-a wm-shadow"/><path class="ahyvrkbbo wm-shadow"/><path class="dyq367b8g"/><path class="as11b96td"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:map-pin-off"} {...others} />);
}

export default Component;
