import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq457jqzf.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="cq457jqzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:portable-wifi-changes"} {...others} />);
}

export default Component;
