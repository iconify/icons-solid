import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk9_w01ix.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="bk9_w01ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:wlan-warning"} {...others} />);
}

export default Component;
