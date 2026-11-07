import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y63wv5bum.css';
import '../../css/a/a-ssoobaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y63wv5bum"/><path class="a-ssoobaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:oven-mitts-bold-duotone"} {...others} />);
}

export default Component;
