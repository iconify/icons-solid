import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bmx-vfbkn.css';
import '../../css/i/if6hcbcca.css';
import '../../css/x/xixii0i5t.css';
import '../../css/s/snck16e5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bmx-vfbkn wm-deco"/><path class="if6hcbcca wm-deco"/><path class="wm-k xixii0i5t"/><path class="snck16e5j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:variable-blueprint"} {...others} />);
}

export default Component;
