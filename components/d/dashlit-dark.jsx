import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8lgnibzz.css';
import '../../css/j/jfosg0bxd.css';
import '../../css/e/efezv2rtc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x8lgnibzz"/><path class="jfosg0bxd"/><path class="efezv2rtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dashlit-dark"} {...others} />);
}

export default Component;
