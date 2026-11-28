import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mhc6tqb3t.css';
import '../../css/a/a8gn8gqmq.css';
import '../../css/l/li69sw6ia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mhc6tqb3t"/><path class="a8gn8gqmq"/><path class="li69sw6ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-right-down-left"} {...others} />);
}

export default Component;
