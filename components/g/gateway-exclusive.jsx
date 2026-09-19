import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm02tab2i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wm02tab2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:gateway-exclusive"} {...others} />);
}

export default Component;
