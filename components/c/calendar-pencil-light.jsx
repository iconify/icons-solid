import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5z8zbx-o.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="v5z8zbx-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:calendar-pencil-light"} {...others} />);
}

export default Component;
