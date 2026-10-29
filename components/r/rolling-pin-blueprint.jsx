import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j_193vb6p.css';
import '../../css/s/sajxnbcjz.css';
import '../../css/u/ubjprya0p.css';
import '../../css/e/e3m3vlqeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j_193vb6p wm-deco"/><path class="sajxnbcjz wm-deco"/><path class="ubjprya0p wm-deco"/><path class="e3m3vlqeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rolling-pin-blueprint"} {...others} />);
}

export default Component;
