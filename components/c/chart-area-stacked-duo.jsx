import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk511mbit.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/e/exnkhlvdn.css';
import '../../css/v/v686tqbit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pk511mbit secondary"/><g class="dt0cm9dhy primary"><path class="if_fr7tub"/><path class="exnkhlvdn"/><path class="v686tqbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-area-stacked-duo"} {...others} />);
}

export default Component;
