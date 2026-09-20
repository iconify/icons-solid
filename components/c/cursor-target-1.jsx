import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x47yvzn3t.css';
import '../../css/q/qg3w4ub8c.css';
import '../../css/k/ko8i97bky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x47yvzn3t"/><path class="qg3w4ub8c"/><path class="ko8i97bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cursor-target-1"} {...others} />);
}

export default Component;
