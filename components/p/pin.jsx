import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vf23vybtz.css';
import '../../css/l/lcvht-vsq.css';
import '../../css/u/urya28b7t.css';
import '../../css/c/cz0-ghgwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vf23vybtz wm-shadow"/><path class="lcvht-vsq wm-shadow"/><path class="urya28b7t"/><path class="cz0-ghgwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pin"} {...others} />);
}

export default Component;
