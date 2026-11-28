import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td_0am-yz.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="td_0am-yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:table-of-contents"} {...others} />);
}

export default Component;
