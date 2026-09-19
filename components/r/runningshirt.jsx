import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb7ny-b9u.css';
import '../../css/y/yebjw07xb.css';
import '../../css/y/yf53kj02n.css';
import '../../css/w/w871p5tnp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pb7ny-b9u"/><path class="yebjw07xb"/><path class="yf53kj02n"/><path class="w871p5tnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:runningshirt"} {...others} />);
}

export default Component;
