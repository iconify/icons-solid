import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqh2ic0-h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yqh2ic0-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bear-spray-can-with-spray-and-rupee"} {...others} />);
}

export default Component;
