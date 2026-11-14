import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li4uwhbms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="li4uwhbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-off-01"} {...others} />);
}

export default Component;
