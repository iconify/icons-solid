import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nsqzqfnmz.css';
import '../../css/r/razn-p2jy.css';
import '../../css/c/cxfhr6p-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nsqzqfnmz"/><path class="razn-p2jy"/><path class="cxfhr6p-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-player-movie"} {...others} />);
}

export default Component;
