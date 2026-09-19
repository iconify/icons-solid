import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6jyqbc7a.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="j6jyqbc7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:plug"} {...others} />);
}

export default Component;
