import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g18yl9blq.css';
import '../../css/j/jobcptooe.css';
import '../../css/w/wxjuyjb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g18yl9blq"/><path class="jobcptooe"/><path class="wxjuyjb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-check-duotone"} {...others} />);
}

export default Component;
