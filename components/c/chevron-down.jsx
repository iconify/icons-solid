import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1ay_wb3k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h1ay_wb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:chevron-down"} {...others} />);
}

export default Component;
