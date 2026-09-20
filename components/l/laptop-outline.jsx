import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1p2xto-b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j1p2xto-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:laptop-outline"} {...others} />);
}

export default Component;
