import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2rly0bxh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rx0sv3t6f.css';
import '../../css/v/v--amgbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w2rly0bxh"/><g class="dt0cm9dhy primary"><path class="rx0sv3t6f"/><path class="v--amgbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:donut-duo"} {...others} />);
}

export default Component;
