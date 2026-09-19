import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do-zxyb4h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="do-zxyb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:fullscreen-exit-alt"} {...others} />);
}

export default Component;
