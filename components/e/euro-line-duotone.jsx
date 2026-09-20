import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/a/a2oe27btl.css';
import '../../css/n/nuzvfybet.css';
import '../../css/i/idkyqjb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="a2oe27btl"/><path class="nuzvfybet"/><path class="idkyqjb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:euro-line-duotone"} {...others} />);
}

export default Component;
