import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbi1n57ce.css';
import '../../css/g/gwi370brj.css';
import '../../css/l/lblj8jhet.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bbi1n57ce"/><path class="gwi370brj"/><path class="lblj8jhet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:volume-mute"} {...others} />);
}

export default Component;
