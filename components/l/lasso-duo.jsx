import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll_-f9b-g.css';
import '../../css/g/gxjs16b5s.css';
import '../../css/k/k56gh1yvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ll_-f9b-g wm-a"/><path class="gxjs16b5s wm-a"/><path class="k56gh1yvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lasso-duo"} {...others} />);
}

export default Component;
