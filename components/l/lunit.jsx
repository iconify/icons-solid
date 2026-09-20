import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yut4i54ux.css';
import '../../css/e/e10lu5twz.css';

const viewBox = {"width":189,"height":52};
const content = `<g class="ft5dv1b6b"><path class="yut4i54ux"/><path class="e10lu5twz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lunit"} {...others} />);
}

export default Component;
