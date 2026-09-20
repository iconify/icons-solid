import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd2iq_8mh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd2iq_8mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:award-sharp"} {...others} />);
}

export default Component;
