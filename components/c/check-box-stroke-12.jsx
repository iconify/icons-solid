import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pecnanbvp.css';
import '../../css/c/cj7d3-_ud.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="pecnanbvp"/><path class="cj7d3-_ud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-stroke-12"} {...others} />);
}

export default Component;
