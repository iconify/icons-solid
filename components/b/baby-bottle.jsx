import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v-t5xdklb.css';
import '../../css/y/yvpggpb8s.css';
import '../../css/k/k7vajtj7l.css';
import '../../css/p/pi7r_2kgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v-t5xdklb wm-shadow"/><path class="wm-shadow yvpggpb8s"/><path class="k7vajtj7l"/><path class="pi7r_2kgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:baby-bottle"} {...others} />);
}

export default Component;
