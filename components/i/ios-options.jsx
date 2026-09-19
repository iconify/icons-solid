import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts2-1lbsz.css';
import '../../css/n/nv41fibrk.css';
import '../../css/q/qz6wmnbwl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ts2-1lbsz"/><path class="nv41fibrk"/><path class="qz6wmnbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-options"} {...others} />);
}

export default Component;
