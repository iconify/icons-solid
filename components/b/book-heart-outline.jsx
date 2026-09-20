import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-4xk6b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-4xk6b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-heart-outline"} {...others} />);
}

export default Component;
