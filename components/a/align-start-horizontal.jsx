import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rk8sbl66f.css';
import '../../css/g/gkmy-0bgh.css';
import '../../css/t/tnmk610vr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="rk8sbl66f"/><rect class="gkmy-0bgh"/><path class="tnmk610vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-start-horizontal"} {...others} />);
}

export default Component;
