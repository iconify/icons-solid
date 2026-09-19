import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sryjz1k4e.css';
import '../../css/b/bkz5kt0_q.css';
import '../../css/e/e5m_zh3ls.css';
import '../../css/v/vj6kdcs0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sryjz1k4e"/><path class="bkz5kt0_q"/><path class="e5m_zh3ls"/><path class="vj6kdcs0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitehardshellfloppy"} {...others} />);
}

export default Component;
