import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srrc7m5nr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="srrc7m5nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:commentround"} {...others} />);
}

export default Component;
