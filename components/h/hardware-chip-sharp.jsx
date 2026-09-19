import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np8f4rmpi.css';
import '../../css/h/haf9aeb_s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="np8f4rmpi"/><path class="haf9aeb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:hardware-chip-sharp"} {...others} />);
}

export default Component;
