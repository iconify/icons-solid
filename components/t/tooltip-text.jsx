import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj7a55boz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zj7a55boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:tooltip-text"} {...others} />);
}

export default Component;
