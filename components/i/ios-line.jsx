import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzviopblm.css';
import '../../css/i/inq_0bbzz.css';
import '../../css/e/elablv1yg.css';
import '../../css/r/rtqak74-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzviopblm"/><path class="inq_0bbzz"/><path clip-rule="evenodd" class="elablv1yg"/><path class="rtqak74-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ios-line"} {...others} />);
}

export default Component;
