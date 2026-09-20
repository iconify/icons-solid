import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuv8fabei.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="fuv8fabei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:zoom-in"} {...others} />);
}

export default Component;
