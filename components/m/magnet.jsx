import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mec9fr0sb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mec9fr0sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:magnet"} {...others} />);
}

export default Component;
