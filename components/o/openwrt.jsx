import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypfwpeqha.css';
import '../../css/t/tqahksbtl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ypfwpeqha"/><path class="tqahksbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openwrt"} {...others} />);
}

export default Component;
