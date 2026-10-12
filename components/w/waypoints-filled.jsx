import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo3s6ybnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yo3s6ybnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:waypoints-filled"} {...others} />);
}

export default Component;
