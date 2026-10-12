import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9x3o5m7j.css';
import '../../css/q/qbwmvc_ha.css';
import '../../css/e/eadv029kd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w9x3o5m7j"/><path class="qbwmvc_ha"/><path class="eadv029kd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-sparkle"} {...others} />);
}

export default Component;
