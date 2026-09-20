import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0isofspd.css';
import '../../css/u/usr-jnz4k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d0isofspd"/><path class="usr-jnz4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-microphone"} {...others} />);
}

export default Component;
