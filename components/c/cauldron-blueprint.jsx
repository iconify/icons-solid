import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rpjazjbdg.css';
import '../../css/t/tf5dpdmig.css';
import '../../css/x/x12kt1bnu.css';
import '../../css/u/u0r22-bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rpjazjbdg wm-deco"/><path class="tf5dpdmig wm-deco"/><path class="wm-deco x12kt1bnu"/><path class="u0r22-bxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cauldron-blueprint"} {...others} />);
}

export default Component;
