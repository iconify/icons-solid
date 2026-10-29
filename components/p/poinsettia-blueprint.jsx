import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cba0ovb-k.css';
import '../../css/s/sfv4gmb2e.css';
import '../../css/n/nvalec0rv.css';
import '../../css/v/v5canwbnu.css';
import '../../css/h/hzbldnbux.css';
import '../../css/f/fe1qt37gc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cba0ovb-k wm-deco"/><path class="sfv4gmb2e wm-deco"/><path class="nvalec0rv wm-deco"/><path class="v5canwbnu wm-k"/><path class="hzbldnbux wm-a"/><path class="fe1qt37gc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:poinsettia-blueprint"} {...others} />);
}

export default Component;
