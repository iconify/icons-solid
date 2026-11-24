import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix6o9jb3s.css';
import '../../css/n/nygcshbpy.css';
import '../../css/i/iogsahb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ix6o9jb3s"/><path class="nygcshbpy"/><path class="iogsahb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-clock-duotone"} {...others} />);
}

export default Component;
