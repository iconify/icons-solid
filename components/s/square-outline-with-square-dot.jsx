import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffogxa9fg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ffogxa9fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:square-outline-with-square-dot"} {...others} />);
}

export default Component;
