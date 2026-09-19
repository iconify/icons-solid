import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-1tko0hh.css';
import '../../css/i/itcix3b7o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h-1tko0hh"/><path class="itcix3b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:layers-outline"} {...others} />);
}

export default Component;
