import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv91aob2m.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="lv91aob2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:filter-b-and-w"} {...others} />);
}

export default Component;
