import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxkzprb8a.css';
import '../../css/l/lscshqmdr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gxkzprb8a"/><path class="lscshqmdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-snow-20"} {...others} />);
}

export default Component;
