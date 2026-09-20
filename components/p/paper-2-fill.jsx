import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryps3tfse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryps3tfse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:paper-2-fill"} {...others} />);
}

export default Component;
