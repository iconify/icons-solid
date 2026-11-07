import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piokwuzpw.css';
import '../../css/n/npg9cub3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="piokwuzpw"/><path class="npg9cub3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brackets-bold-duotone"} {...others} />);
}

export default Component;
