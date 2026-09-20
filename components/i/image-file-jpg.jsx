import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ahssyn5ra.css';
import '../../css/g/gd42n2r-e.css';
import '../../css/q/qsxp9sa8e.css';
import '../../css/n/n7nnqq0ig.css';
import '../../css/i/ibsgw-b1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ahssyn5ra"/><path class="gd42n2r-e"/><path class="qsxp9sa8e"/><path class="n7nnqq0ig"/><path class="ibsgw-b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:image-file-jpg"} {...others} />);
}

export default Component;
