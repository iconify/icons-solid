import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqb90zg8x.css';
import '../../css/u/u68ln9bww.css';
import '../../css/n/nk7gh4h2a.css';
import '../../css/q/q6c-q2b0p.css';
import '../../css/d/dtmcvvnkj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tqb90zg8x"/><path class="u68ln9bww"/><path class="nk7gh4h2a"/><path class="q6c-q2b0p"/><path class="dtmcvvnkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-points"} {...others} />);
}

export default Component;
