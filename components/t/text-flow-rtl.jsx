import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvxhxcb1v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pvxhxcb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:text-flow-rtl"} {...others} />);
}

export default Component;
