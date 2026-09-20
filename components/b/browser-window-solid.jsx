import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvl9obcpb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zvl9obcpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:browser-window-solid"} {...others} />);
}

export default Component;
