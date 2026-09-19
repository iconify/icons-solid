import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq5e1h6ad.css';
import '../../css/d/ds7dl9bhv.css';
import '../../css/m/m5m3ywbwl.css';
import '../../css/t/turu6r4ex.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iq5e1h6ad"/><path class="ds7dl9bhv"/><path class="m5m3ywbwl"/><path class="turu6r4ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:headstone"} {...others} />);
}

export default Component;
