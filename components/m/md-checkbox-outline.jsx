import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrhqy0n9c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yrhqy0n9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-checkbox-outline"} {...others} />);
}

export default Component;
