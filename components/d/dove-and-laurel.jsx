import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkj27dj0e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wkj27dj0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dove-and-laurel"} {...others} />);
}

export default Component;
