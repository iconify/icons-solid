import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq-g64b7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq-g64b7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:ice-skate"} {...others} />);
}

export default Component;
