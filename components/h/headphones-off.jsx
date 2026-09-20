import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f427lpb1w.css';
import '../../css/s/sswn5w2za.css';
import '../../css/x/x0csbt6wm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f427lpb1w"/><path class="sswn5w2za"/><path class="x0csbt6wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:headphones-off"} {...others} />);
}

export default Component;
