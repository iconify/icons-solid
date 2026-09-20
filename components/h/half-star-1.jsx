import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k78xr_h_b.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="k78xr_h_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:half-star-1"} {...others} />);
}

export default Component;
