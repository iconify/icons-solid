import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/flj5rtb4q.css';
import '../../css/v/v8b25pxen.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/tv8x5d72f.css';
import '../../css/h/hm-_8ybly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="flj5rtb4q wm-deco"/><path class="v8b25pxen wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="tv8x5d72f"/><path class="hm-_8ybly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gem-blueprint"} {...others} />);
}

export default Component;
