import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erqf-cbns.css';
import '../../css/m/m65r8efup.css';
import '../../css/v/vkeythb5r.css';
import '../../css/n/n22d1xb9d.css';
import '../../css/l/l6gehnbda.css';
import '../../css/e/emxzzqjsk.css';
import '../../css/l/lc4dnnm5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="erqf-cbns wm-k"/><path class="m65r8efup wm-k"/><path class="vkeythb5r wm-k"/><path class="n22d1xb9d wm-k"/><path class="l6gehnbda wm-k"/><path class="emxzzqjsk wm-k"/><path class="lc4dnnm5l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:crop"} {...others} />);
}

export default Component;
