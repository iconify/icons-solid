import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eci4qpbck.css';
import '../../css/s/s46lxcc4q.css';
import '../../css/t/tw7t0e8hs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eci4qpbck"/><path class="s46lxcc4q"/><path class="tw7t0e8hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hospital-bed-02"} {...others} />);
}

export default Component;
