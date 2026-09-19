import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a7h6h23cz.css';
import '../../css/d/djetgxbip.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="a7h6h23cz"/><path class="djetgxbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:location-stroke-12"} {...others} />);
}

export default Component;
