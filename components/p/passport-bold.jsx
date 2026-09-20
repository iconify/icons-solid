import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozdkyobjs.css';
import '../../css/s/s6v728bzl.css';
import '../../css/k/k8ojjh_gd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ozdkyobjs"/><path class="s6v728bzl"/><path clip-rule="evenodd" class="k8ojjh_gd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-bold"} {...others} />);
}

export default Component;
