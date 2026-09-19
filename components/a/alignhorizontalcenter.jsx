import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdw4irbnd.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="cdw4irbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alignhorizontalcenter"} {...others} />);
}

export default Component;
