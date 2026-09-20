import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5a7x8bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5a7x8bkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:send-horizontal"} {...others} />);
}

export default Component;
