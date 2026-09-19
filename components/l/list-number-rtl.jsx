import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejuhadc8v.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="ejuhadc8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:list-number-rtl"} {...others} />);
}

export default Component;
