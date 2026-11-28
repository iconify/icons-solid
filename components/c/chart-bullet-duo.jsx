import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aki4_ob5y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s49pa1y0q.css';
import '../../css/c/chcxsxgan.css';
import '../../css/a/aprrsssyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aki4_ob5y secondary"/><g class="dt0cm9dhy primary"><path class="s49pa1y0q"/><path class="chcxsxgan"/><path class="aprrsssyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-bullet-duo"} {...others} />);
}

export default Component;
