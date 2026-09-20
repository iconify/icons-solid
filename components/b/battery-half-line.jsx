import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q280ddcrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q280ddcrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:battery-half-line"} {...others} />);
}

export default Component;
