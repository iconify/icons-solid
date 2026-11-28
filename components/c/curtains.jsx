import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ub4u4kwda.css';
import '../../css/y/ys-_x32cm.css';
import '../../css/o/o6vihjm2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ub4u4kwda"/><path class="ys-_x32cm"/><path class="o6vihjm2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:curtains"} {...others} />);
}

export default Component;
