import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqmmymb5e.css';
import '../../css/f/fy2fydtce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hqmmymb5e"/><path class="fy2fydtce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:sync-sharp"} {...others} />);
}

export default Component;
