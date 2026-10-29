import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m2nn7f-kd.css';
import '../../css/e/eb2qabupy.css';
import '../../css/q/qw6touosl.css';
import '../../css/a/axkwzobnu.css';
import '../../css/s/sue7oxb6n.css';
import '../../css/t/tl2gs1psu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="m2nn7f-kd wm-deco"/><path class="eb2qabupy wm-deco"/><path class="qw6touosl wm-k"/><path class="axkwzobnu wm-a"/><path class="sue7oxb6n wm-k"/><path class="tl2gs1psu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-up-right-blueprint"} {...others} />);
}

export default Component;
