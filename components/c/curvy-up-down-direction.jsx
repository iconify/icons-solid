import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp0smd0qq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp0smd0qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:curvy-up-down-direction"} {...others} />);
}

export default Component;
