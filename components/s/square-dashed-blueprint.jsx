import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ka27c-bva.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/n/ncvxbdbpd.css';
import '../../css/q/q294q2b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ka27c-bva wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ncvxbdbpd"/><path class="q294q2b5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-dashed-blueprint"} {...others} />);
}

export default Component;
