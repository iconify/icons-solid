import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra-_p7bsg.css';
import '../../css/a/acuwqsypk.css';
import '../../css/g/g-ii3kbjw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ra-_p7bsg"/><path class="acuwqsypk"/><path class="g-ii3kbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:positive-intentions"} {...others} />);
}

export default Component;
