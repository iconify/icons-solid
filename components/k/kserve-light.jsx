import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh4dfy4zb.css';
import '../../css/v/v-ne-abrv.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="yh4dfy4zb"/><path class="cls-2 v-ne-abrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kserve-light"} {...others} />);
}

export default Component;
