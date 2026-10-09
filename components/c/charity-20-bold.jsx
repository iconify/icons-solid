import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur5l4w8hg.css';
import '../../css/n/nqiq-nbfi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ur5l4w8hg"/><path class="nqiq-nbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charity-20-bold"} {...others} />);
}

export default Component;
