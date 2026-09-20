import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/e/e98791bqv.css';
import '../../css/n/nay7nddul.css';
import '../../css/z/zsv6gzbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pw8f5c0fp"/><path class="e98791bqv"/><path class="nay7nddul"/><path class="zsv6gzbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-2-linear"} {...others} />);
}

export default Component;
