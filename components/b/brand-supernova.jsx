import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fv5pcnpmp.css';
import '../../css/f/fp_x967xu.css';
import '../../css/x/xaq-f1ehc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fv5pcnpmp"/><path class="fp_x967xu"/><path class="xaq-f1ehc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-supernova"} {...others} />);
}

export default Component;
