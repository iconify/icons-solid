import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt9l-fdny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt9l-fdny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:analytics-line"} {...others} />);
}

export default Component;
