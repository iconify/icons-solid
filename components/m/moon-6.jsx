import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnfx4bcxi.css';

const viewBox = {"width":769,"height":1537};
const content = `<path class="rnfx4bcxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-6"} {...others} />);
}

export default Component;
