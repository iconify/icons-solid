import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/ymh-28bff.css';
import '../../css/l/llb9lac0q.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="ymh-28bff"/><path class="llb9lac0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:monitor-stroke-12"} {...others} />);
}

export default Component;
