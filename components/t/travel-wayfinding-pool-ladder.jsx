import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blawj9z5c.css';
import '../../css/c/czqdhwn7q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="blawj9z5c"/><path class="czqdhwn7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:travel-wayfinding-pool-ladder"} {...others} />);
}

export default Component;
