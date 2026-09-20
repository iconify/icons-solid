import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/h/h_mo2p59k.css';
import '../../css/e/e1cdyn4yb.css';
import '../../css/x/xyj0p73uw.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="h_mo2p59k"/><path class="e1cdyn4yb"/><path clip-rule="evenodd" class="xyj0p73uw"/><path class="s8qju0q_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-signal-bold-duotone"} {...others} />);
}

export default Component;
