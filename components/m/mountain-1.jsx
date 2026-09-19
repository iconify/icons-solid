import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cot1lm0tc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cot1lm0tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:mountain-1"} {...others} />);
}

export default Component;
