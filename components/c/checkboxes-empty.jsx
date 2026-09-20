import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjyxj_bwx.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="xjyxj_bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:checkboxes-empty"} {...others} />);
}

export default Component;
