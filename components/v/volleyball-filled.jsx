import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz3hkhzdn.css';
import '../../css/l/l_7dq0ahs.css';
import '../../css/p/pun1k1brn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uz3hkhzdn"/><path class="l_7dq0ahs"/><path class="pun1k1brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:volleyball-filled"} {...others} />);
}

export default Component;
