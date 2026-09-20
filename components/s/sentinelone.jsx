import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg8x8bqpq.css';
import '../../css/l/l16jcdb4q.css';
import '../../css/e/efbiecbmk.css';
import '../../css/a/av3zbub9e.css';
import '../../css/o/oicd7acev.css';

const viewBox = {"width":567.24,"height":95.88};
const content = `<path class="xg8x8bqpq"/><path class="l16jcdb4q"/><path class="efbiecbmk"/><path class="av3zbub9e"/><path class="oicd7acev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sentinelone"} {...others} />);
}

export default Component;
