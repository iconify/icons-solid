import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp9-9q1-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp9-9q1-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chevron-down-line"} {...others} />);
}

export default Component;
