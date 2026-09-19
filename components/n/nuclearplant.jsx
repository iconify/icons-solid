import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcv8ohbqq.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="dcv8ohbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:nuclearplant"} {...others} />);
}

export default Component;
