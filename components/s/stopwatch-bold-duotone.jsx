import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szjj1eb9x.css';
import '../../css/y/y7btgy5eh.css';
import '../../css/i/isfz-28nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szjj1eb9x"/><path class="y7btgy5eh"/><path class="isfz-28nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-bold-duotone"} {...others} />);
}

export default Component;
