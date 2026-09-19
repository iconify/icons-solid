import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfwi9t47h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfwi9t47h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:groq-ai"} {...others} />);
}

export default Component;
