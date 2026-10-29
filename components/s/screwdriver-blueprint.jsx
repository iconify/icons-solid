import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vsshmivni.css';
import '../../css/n/nboiupjwl.css';
import '../../css/p/php_9kbmo.css';
import '../../css/w/wz_yisuyq.css';
import '../../css/q/qygck_omr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vsshmivni wm-deco"/><path class="nboiupjwl wm-deco"/><path class="php_9kbmo wm-deco"/><path class="wm-k wz_yisuyq"/><path class="qygck_omr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screwdriver-blueprint"} {...others} />);
}

export default Component;
