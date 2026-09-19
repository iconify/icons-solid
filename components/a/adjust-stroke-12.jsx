import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/ulnk4ybsa.css';
import '../../css/w/w2-6cebly.css';
import '../../css/t/t2l5vjgzu.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="ulnk4ybsa"/><circle class="w2-6cebly"/><path class="t2l5vjgzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:adjust-stroke-12"} {...others} />);
}

export default Component;
