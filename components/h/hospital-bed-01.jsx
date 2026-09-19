import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rl1w8_nfg.css';
import '../../css/b/bqah07bcj.css';
import '../../css/s/s5fo-_2td.css';
import '../../css/t/tw7t0e8hs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rl1w8_nfg"/><path class="bqah07bcj"/><path class="s5fo-_2td"/><path class="tw7t0e8hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hospital-bed-01"} {...others} />);
}

export default Component;
