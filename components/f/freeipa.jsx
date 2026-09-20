import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3zbv3b1e.css';
import '../../css/z/zu9lzmbmb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v3zbv3b1e"/><path class="zu9lzmbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freeipa"} {...others} />);
}

export default Component;
