import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6bs4k0fl.css';
import '../../css/y/yb3fr0bwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6bs4k0fl"/><path class="yb3fr0bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-bold-duotone"} {...others} />);
}

export default Component;
