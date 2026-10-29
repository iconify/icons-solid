import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vukr31bcm.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/b82dfnb_o.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vukr31bcm wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="b82dfnb_o wm-k"/><path class="jmo57ab0a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:octagon-x-blueprint"} {...others} />);
}

export default Component;
