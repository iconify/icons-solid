import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydug6fb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ydug6fb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:utensils"} {...others} />);
}

export default Component;
