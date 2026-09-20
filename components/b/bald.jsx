import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op8cfac-b.css';
import '../../css/f/fc86yboyy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="op8cfac-b"/><path class="fc86yboyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bald"} {...others} />);
}

export default Component;
