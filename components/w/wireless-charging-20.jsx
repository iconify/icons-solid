import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5m23wblo.css';
import '../../css/w/wg0eo9hxf.css';
import '../../css/z/zy2qlf16k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e5m23wblo"/><path class="wg0eo9hxf"/><path class="zy2qlf16k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wireless-charging-20"} {...others} />);
}

export default Component;
