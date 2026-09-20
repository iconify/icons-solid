import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e69it0bqa.css';
import '../../css/a/ad76n-bro.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e69it0bqa"/><path class="ad76n-bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:password-pusher-light"} {...others} />);
}

export default Component;
