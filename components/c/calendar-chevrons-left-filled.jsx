import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np4301h5k.css';
import '../../css/j/j8ev3vexx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="np4301h5k"/><path class="j8ev3vexx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-chevrons-left-filled"} {...others} />);
}

export default Component;
