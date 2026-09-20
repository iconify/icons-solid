import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6dzgw0rm.css';
import '../../css/n/n--stkfmt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b6dzgw0rm"/><path class="n--stkfmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-key-1"} {...others} />);
}

export default Component;
