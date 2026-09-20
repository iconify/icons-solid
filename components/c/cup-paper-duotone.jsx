import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6o4tba2o.css';
import '../../css/f/fvoj6rvkh.css';
import '../../css/i/iy-tl4g0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p6o4tba2o"/><path class="fvoj6rvkh"/><path class="iy-tl4g0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup-paper-duotone"} {...others} />);
}

export default Component;
