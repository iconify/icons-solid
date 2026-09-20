import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-e4hr07v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p-e4hr07v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:left-down-corner-arrow-1"} {...others} />);
}

export default Component;
