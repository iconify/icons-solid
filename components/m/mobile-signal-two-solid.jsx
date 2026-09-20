import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8kplqktf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8kplqktf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:mobile-signal-two-solid"} {...others} />);
}

export default Component;
