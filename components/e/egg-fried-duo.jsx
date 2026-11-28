import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tij9s_4ga.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sxtt7ca6r.css';
import '../../css/m/mydyanbos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tij9s_4ga"/><g class="dt0cm9dhy primary"><path class="sxtt7ca6r"/><path class="mydyanbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:egg-fried-duo"} {...others} />);
}

export default Component;
