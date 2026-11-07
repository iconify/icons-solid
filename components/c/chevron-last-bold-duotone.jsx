import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwow_w44a.css';
import '../../css/l/lsq66r8ar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwow_w44a"/><path class="lsq66r8ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-last-bold-duotone"} {...others} />);
}

export default Component;
