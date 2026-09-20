import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/swsab_86e.css';
import '../../css/f/fw5rt46mg.css';
import '../../css/k/kahn_ldoz.css';
import '../../css/r/r6c1y7b6t.css';
import '../../css/k/kwa31tbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="swsab_86e"/><circle class="fw5rt46mg"/><path class="kahn_ldoz"/><path class="r6c1y7b6t"/><path class="kwa31tbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:usb-line-duotone"} {...others} />);
}

export default Component;
