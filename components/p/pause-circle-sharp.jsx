import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx4_4o47q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vx4_4o47q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pause-circle-sharp"} {...others} />);
}

export default Component;
