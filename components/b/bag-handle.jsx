import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg6kdcc7q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dg6kdcc7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bag-handle"} {...others} />);
}

export default Component;
