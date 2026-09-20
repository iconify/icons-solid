import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7hi9sbth.css';
import '../../css/u/ukauanbdu.css';
import '../../css/m/mrpd8lbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7hi9sbth"/><path class="ukauanbdu"/><path class="mrpd8lbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:reddit-line"} {...others} />);
}

export default Component;
