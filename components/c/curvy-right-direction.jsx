import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkq6cdz7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkq6cdz7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:curvy-right-direction"} {...others} />);
}

export default Component;
