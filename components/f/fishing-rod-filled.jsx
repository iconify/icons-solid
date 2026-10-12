import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfbsv3wdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tfbsv3wdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fishing-rod-filled"} {...others} />);
}

export default Component;
