import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv_0-ekbd.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="uv_0-ekbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cloudaltsync"} {...others} />);
}

export default Component;
