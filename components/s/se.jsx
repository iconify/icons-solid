import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rif5jcvyy.css';
import '../../css/z/zsrsrybxe.css';
import '../../css/k/k8ycbgg-m.css';

const viewBox = {"width":301,"height":189};
const content = `<g class="ft5dv1b6b"><path class="rif5jcvyy"/><path class="zsrsrybxe"/><path class="k8ycbgg-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:se"} {...others} />);
}

export default Component;
