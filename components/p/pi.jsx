import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyu5frbjg.css';
import '../../css/z/zt0uakzko.css';

const viewBox = {"width":800,"height":800};
const content = `<path class="vyu5frbjg"/><path class="zt0uakzko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pi"} {...others} />);
}

export default Component;
