import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts3lanhek.css';
import '../../css/m/mlhjt3b1y.css';
import '../../css/b/bri9cxbwl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ts3lanhek"/><path class="mlhjt3b1y"/><path class="bri9cxbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dawarich"} {...others} />);
}

export default Component;
