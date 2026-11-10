import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqgd8mbhr.css';
import '../../css/w/w1exds01h.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/v/vfgwdwb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aqgd8mbhr"/><path class="w1exds01h"/><path class="xtyg9db9j"/><path class="vfgwdwb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-off"} {...others} />);
}

export default Component;
