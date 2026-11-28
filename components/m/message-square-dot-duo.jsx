import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybfwoeb6s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s6i14l-ql.css';
import '../../css/x/xd8yd0bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ybfwoeb6s"/><g class="dt0cm9dhy primary"><path class="s6i14l-ql"/><path class="xd8yd0bhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-square-dot-duo"} {...others} />);
}

export default Component;
