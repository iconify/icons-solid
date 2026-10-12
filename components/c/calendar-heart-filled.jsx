import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teke80b1t.css';
import '../../css/s/srka-7bio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="teke80b1t"/><path class="srka-7bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-heart-filled"} {...others} />);
}

export default Component;
