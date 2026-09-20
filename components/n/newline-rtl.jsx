import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa3c4bb_z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pa3c4bb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:newline-rtl"} {...others} />);
}

export default Component;
