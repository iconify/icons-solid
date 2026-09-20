import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikhn5z8rf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ikhn5z8rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:navigation-arrow-up"} {...others} />);
}

export default Component;
