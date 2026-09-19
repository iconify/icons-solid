import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8893zazi.css';
import '../../css/k/k-2_-zb2s.css';
import '../../css/a/aw-an9zor.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x8893zazi"/><path class="k-2_-zb2s"/><path class="aw-an9zor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:outlook-severe"} {...others} />);
}

export default Component;
