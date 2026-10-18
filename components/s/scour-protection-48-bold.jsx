import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2jxlvb2i.css';
import '../../css/t/t-4rqjbfm.css';
import '../../css/k/ke-yukwch.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f2jxlvb2i"/><path class="t-4rqjbfm"/><path class="ke-yukwch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scour-protection-48-bold"} {...others} />);
}

export default Component;
