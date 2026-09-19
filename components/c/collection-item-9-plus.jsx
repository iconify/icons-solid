import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5_pm9b3h.css';

const viewBox = {"width":472,"height":480};
const content = `<path class="g5_pm9b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:collection-item-9-plus"} {...others} />);
}

export default Component;
