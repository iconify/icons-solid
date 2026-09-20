import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj0y3zbui.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xj0y3zbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:inbox-fill-16"} {...others} />);
}

export default Component;
