import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnb_aj5jl.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="jnb_aj5jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:tv-play"} {...others} />);
}

export default Component;
