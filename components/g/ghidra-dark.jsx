import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhmw-kb7l.css';
import '../../css/i/i2b0w4dly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yhmw-kb7l"/><path class="i2b0w4dly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ghidra-dark"} {...others} />);
}

export default Component;
