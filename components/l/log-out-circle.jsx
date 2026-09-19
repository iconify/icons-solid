import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeah8-6tb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xeah8-6tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:log-out-circle"} {...others} />);
}

export default Component;
