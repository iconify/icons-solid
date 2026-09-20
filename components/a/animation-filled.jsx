import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6d5tp4hc.css';
import '../../css/a/aji04yosq.css';
import '../../css/w/wmxx11b3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6d5tp4hc"/><path class="aji04yosq"/><path class="wmxx11b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:animation-filled"} {...others} />);
}

export default Component;
