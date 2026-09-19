import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev-_rkitm.css';
import '../../css/l/lxavlrbta.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ev-_rkitm"/><path class="lxavlrbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:image-search-alt"} {...others} />);
}

export default Component;
