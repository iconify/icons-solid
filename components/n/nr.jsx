import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6tzp73jv.css';
import '../../css/u/ude4r2bti.css';
import '../../css/p/py-dpkvzj.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="n6tzp73jv"/><path class="ude4r2bti"/><path class="py-dpkvzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:nr"} {...others} />);
}

export default Component;
