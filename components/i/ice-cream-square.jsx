import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1p3sh9lx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n1p3sh9lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:ice-cream-square"} {...others} />);
}

export default Component;
