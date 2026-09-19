import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e54zhh65x.css';

const viewBox = {"width":472,"height":480};
const content = `<path class="e54zhh65x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:collection-item-5"} {...others} />);
}

export default Component;
