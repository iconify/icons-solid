import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvt5iabui.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="tvt5iabui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:arrow-down-right-box"} {...others} />);
}

export default Component;
