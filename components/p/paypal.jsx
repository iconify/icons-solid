import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvtq6p3pf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvtq6p3pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:paypal"} {...others} />);
}

export default Component;
