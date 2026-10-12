import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geuvedbeg.css';
import '../../css/z/z1o1gjbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="geuvedbeg"/><path class="z1o1gjbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-up-filled"} {...others} />);
}

export default Component;
