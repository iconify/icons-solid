import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqmgsn7hu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqmgsn7hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chevrons-left-right-ellipsis-line"} {...others} />);
}

export default Component;
