import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztj1zhmqk.css';
import '../../css/t/tlg0i3byt.css';
import '../../css/o/oraswvkzg.css';
import '../../css/v/v420qz8oi.css';
import '../../css/y/ycbqh8owi.css';
import '../../css/o/oq279achg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow ztj1zhmqk"/><path class="tlg0i3byt wm-k"/><path class="oraswvkzg wm-k"/><path class="v420qz8oi wm-k"/><path class="wm-k ycbqh8owi"/><path class="oq279achg wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:circle-dashed"} {...others} />);
}

export default Component;
