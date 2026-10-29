import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rcld46bpd.css';
import '../../css/b/bvxg-tnme.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/z/zcrcpgjjd.css';
import '../../css/v/v2dzgoy5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rcld46bpd wm-deco"/><path class="bvxg-tnme wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="zcrcpgjjd"/><path class="v2dzgoy5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:school-blueprint"} {...others} />);
}

export default Component;
