import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywxc_u7nk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ywxc_u7nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:xrp-circle-remix"} {...others} />);
}

export default Component;
