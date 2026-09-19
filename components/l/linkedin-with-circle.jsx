import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpgdi0v8z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xpgdi0v8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:linkedin-with-circle"} {...others} />);
}

export default Component;
