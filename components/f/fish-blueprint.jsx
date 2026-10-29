import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rxs5xloud.css';
import '../../css/d/dd9a3bcoo.css';
import '../../css/l/lqvoh0byu.css';
import '../../css/g/g6x69p_ze.css';
import '../../css/f/fm32n2byj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rxs5xloud wm-deco"/><path class="dd9a3bcoo wm-deco"/><path class="lqvoh0byu wm-deco"/><path class="g6x69p_ze wm-k"/><path class="fm32n2byj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fish-blueprint"} {...others} />);
}

export default Component;
