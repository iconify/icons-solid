import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gz9ugibkn.css';
import '../../css/t/tif1-g2no.css';
import '../../css/s/ssav-ia1y.css';
import '../../css/n/nr6bdlwuj.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="gz9ugibkn"/><path class="tif1-g2no"/><path class="ssav-ia1y"/><path class="nr6bdlwuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mm"} {...others} />);
}

export default Component;
