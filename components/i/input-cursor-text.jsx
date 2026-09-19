import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1y6vhbca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1y6vhbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:input-cursor-text"} {...others} />);
}

export default Component;
