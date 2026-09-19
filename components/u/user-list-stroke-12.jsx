import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zb0q9-bfp.css';
import '../../css/o/ol5nzqv4x.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="zb0q9-bfp"/><path class="ol5nzqv4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-list-stroke-12"} {...others} />);
}

export default Component;
