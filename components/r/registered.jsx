import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pchomjh0v.css';
import '../../css/y/yqzwxjpgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pchomjh0v"/><path class="yqzwxjpgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:registered"} {...others} />);
}

export default Component;
