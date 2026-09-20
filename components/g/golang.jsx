import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghelsvv_i.css';
import '../../css/k/k8ajql7ic.css';
import '../../css/h/hgh_uxb8z.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="ghelsvv_i"/><path class="k8ajql7ic"/><path class="hgh_uxb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:golang"} {...others} />);
}

export default Component;
