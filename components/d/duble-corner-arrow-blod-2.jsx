import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu4to9b9w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cu4to9b9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:duble-corner-arrow-blod-2"} {...others} />);
}

export default Component;
