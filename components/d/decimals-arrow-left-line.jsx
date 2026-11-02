import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq3pbd0ce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eq3pbd0ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:decimals-arrow-left-line"} {...others} />);
}

export default Component;
