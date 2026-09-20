import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6t9qrb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6t9qrb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-right-bold-outline"} {...others} />);
}

export default Component;
