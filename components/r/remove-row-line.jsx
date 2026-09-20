import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhh2g9tnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhh2g9tnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:remove-row-line"} {...others} />);
}

export default Component;
