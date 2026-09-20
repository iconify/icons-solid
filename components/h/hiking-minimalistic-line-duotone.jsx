import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/einr_36wa.css';
import '../../css/j/joe83l06m.css';
import '../../css/n/nxfzdyb0n.css';
import '../../css/a/aji3_8bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="einr_36wa"/><path class="joe83l06m"/><path class="nxfzdyb0n"/><path class="aji3_8bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-minimalistic-line-duotone"} {...others} />);
}

export default Component;
