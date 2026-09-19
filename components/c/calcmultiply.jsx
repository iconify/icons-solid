import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd2ba26lp.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="fd2ba26lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:calcmultiply"} {...others} />);
}

export default Component;
