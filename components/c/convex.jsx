import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uu4-dmbyx.css';
import '../../css/m/m18hjpwjd.css';
import '../../css/k/kuhhwii4x.css';

const viewBox = {"width":128,"height":132,"left":28,"top":28};
const content = `<g class="ft5dv1b6b"><path class="uu4-dmbyx"/><path class="m18hjpwjd"/><path class="kuhhwii4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:convex"} {...others} />);
}

export default Component;
