import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piwsv7bod.css';
import '../../css/c/c5at6trmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="piwsv7bod"/><path class="c5at6trmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:smartphone-user-round-filled"} {...others} />);
}

export default Component;
