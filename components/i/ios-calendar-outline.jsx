import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw0ekm9xl.css';
import '../../css/n/n_y4z0b_i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xw0ekm9xl"/><path class="n_y4z0b_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-calendar-outline"} {...others} />);
}

export default Component;
