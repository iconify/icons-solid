import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0x58r32v.css';

const viewBox = {"width":1025,"height":703};
const content = `<path class="z0x58r32v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:blackberry"} {...others} />);
}

export default Component;
