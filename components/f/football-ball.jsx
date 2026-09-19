import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkfjl_8-j.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="rkfjl_8-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:football-ball"} {...others} />);
}

export default Component;
