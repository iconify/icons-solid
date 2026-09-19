import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt_htbcmj.css';
import '../../css/a/ag187fmtm.css';
import '../../css/w/w6a8j9y3f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kt_htbcmj"/><path class="ag187fmtm"/><path class="w6a8j9y3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:openlock"} {...others} />);
}

export default Component;
