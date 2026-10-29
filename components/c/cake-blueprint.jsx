import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zzo76fjef.css';
import '../../css/m/mqe35ibvh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/h/h8z-o8bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zzo76fjef"/><path class="mqe35ibvh wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="h8z-o8bfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cake-blueprint"} {...others} />);
}

export default Component;
