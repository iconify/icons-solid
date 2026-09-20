import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4i3t7bsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4i3t7bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:smartphone-apps-line"} {...others} />);
}

export default Component;
