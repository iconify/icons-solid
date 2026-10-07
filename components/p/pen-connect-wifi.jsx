import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyx6_8qkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyx6_8qkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pen-connect-wifi"} {...others} />);
}

export default Component;
