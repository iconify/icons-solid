import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n0qh4ngqs.css';
import '../../css/c/cdhs5lb-o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="n0qh4ngqs"/><path class="cdhs5lb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-double-stroke-16"} {...others} />);
}

export default Component;
