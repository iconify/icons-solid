import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjxjirbwm.css';
import '../../css/t/tiopm5b9e.css';
import '../../css/w/wztl8_byv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mjxjirbwm"/><path class="tiopm5b9e"/><path class="wztl8_byv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:squiggles-sparkle"} {...others} />);
}

export default Component;
