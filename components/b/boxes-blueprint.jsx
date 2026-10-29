import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fj4kk9bgl.css';
import '../../css/y/yonu32bng.css';
import '../../css/p/pd8ob3bre.css';
import '../../css/s/shg57gb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fj4kk9bgl wm-deco"/><path class="wm-deco yonu32bng"/><path class="pd8ob3bre wm-k"/><path class="shg57gb1y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:boxes-blueprint"} {...others} />);
}

export default Component;
