import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0v6rsipu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="i0v6rsipu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mybb"} {...others} />);
}

export default Component;
