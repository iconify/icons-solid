import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc013ab-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nc013ab-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lemon-squeezy-line"} {...others} />);
}

export default Component;
