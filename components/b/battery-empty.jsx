import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju2p32bfx.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="ju2p32bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:battery-empty"} {...others} />);
}

export default Component;
