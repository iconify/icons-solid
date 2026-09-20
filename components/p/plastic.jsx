import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9fy4pb2e.css';
import '../../css/d/dgefbvkwi.css';
import '../../css/h/hyxzxriuy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="e9fy4pb2e"><path class="dgefbvkwi"/><path class="hyxzxriuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:plastic"} {...others} />);
}

export default Component;
