import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-cf82kwn.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="s-cf82kwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:miniwink"} {...others} />);
}

export default Component;
