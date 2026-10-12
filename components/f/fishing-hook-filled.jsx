import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzqsa1b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzqsa1b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fishing-hook-filled"} {...others} />);
}

export default Component;
