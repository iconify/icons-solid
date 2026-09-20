import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-la4bbbr.css';

const viewBox = {"width":4605.7,"height":2723.6};
const content = `<path class="n-la4bbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:amazon-prime"} {...others} />);
}

export default Component;
