import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mkllvbb4k.css';
import '../../css/m/md4a6qbnv.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="mkllvbb4k"/><path class="md4a6qbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:line-graph-stroke-12"} {...others} />);
}

export default Component;
