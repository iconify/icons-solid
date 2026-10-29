import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v2cf8pb4t.css';
import '../../css/c/cf0yg0eqb.css';
import '../../css/v/vxpkff8wf.css';
import '../../css/w/wzj--9dxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v2cf8pb4t wm-deco"/><path class="cf0yg0eqb wm-deco"/><path class="vxpkff8wf wm-k"/><path class="wm-a wzj--9dxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:croissant-blueprint"} {...others} />);
}

export default Component;
