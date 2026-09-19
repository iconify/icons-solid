import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhets1rsz.css';
import '../../css/z/zl5kt1bmm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dhets1rsz"/><path class="zl5kt1bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:voice-over-record"} {...others} />);
}

export default Component;
