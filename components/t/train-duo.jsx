import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sfboi1amy.css';
import '../../css/m/mlzja6boa.css';
import '../../css/l/ly23pmblx.css';
import '../../css/l/ld4zezz7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sfboi1amy"/><path class="mlzja6boa wm-a"/><path class="ly23pmblx"/><path class="ld4zezz7d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:train-duo"} {...others} />);
}

export default Component;
