import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj494dplb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/frwj1bkcb.css';
import '../../css/l/lfjpy4bqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj494dplb secondary"/><g class="dt0cm9dhy primary"><path class="frwj1bkcb"/><path class="lfjpy4bqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mouse-duo"} {...others} />);
}

export default Component;
