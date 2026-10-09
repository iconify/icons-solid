import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru3berbsx.css';
import '../../css/x/x0sa_-lyq.css';
import '../../css/b/bd4fsf3wr.css';
import '../../css/k/koiau4b8h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ru3berbsx"/><path class="x0sa_-lyq"/><path class="bd4fsf3wr"/><path class="koiau4b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anchor-48"} {...others} />);
}

export default Component;
