import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb7e86lle.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xb7e86lle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:emoji-happy"} {...others} />);
}

export default Component;
