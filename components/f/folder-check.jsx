import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jorz33g7a.css';
import '../../css/i/ivdmxjbeq.css';
import '../../css/c/cm7yvy11s.css';
import '../../css/f/fprp5mb8o.css';
import '../../css/l/l-orscc5v.css';
import '../../css/v/vk59lpmmd.css';
import '../../css/z/z__394qag.css';
import '../../css/i/i4ztq-zpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jorz33g7a wm-shadow"/><path class="ivdmxjbeq wm-shadow"/><path class="cm7yvy11s"/><path class="fprp5mb8o"/><path class="l-orscc5v"/><path class="vk59lpmmd"/><path class="z__394qag"/><path class="i4ztq-zpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:folder-check"} {...others} />);
}

export default Component;
