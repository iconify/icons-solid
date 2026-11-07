import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmj3xepjb.css';
import '../../css/j/joty_-bbk.css';
import '../../css/x/xq587lbyn.css';
import '../../css/n/nsza0ub4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmj3xepjb"/><path class="joty_-bbk"/><path class="xq587lbyn"/><path clip-rule="evenodd" class="nsza0ub4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wi-fi-outline"} {...others} />);
}

export default Component;
