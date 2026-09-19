import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_pbrfbba.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="w_pbrfbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:solarpanel"} {...others} />);
}

export default Component;
