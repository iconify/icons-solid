import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4f-aabko.css';
import '../../css/n/nbzxfbcpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4f-aabko"/><path class="nbzxfbcpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-filled"} {...others} />);
}

export default Component;
