import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7_a60-yr.css';
import '../../css/t/twmo39osj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w7_a60-yr"/><path class="twmo39osj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbon-star-bold-duotone"} {...others} />);
}

export default Component;
