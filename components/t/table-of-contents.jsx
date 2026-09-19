import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef4-qabdm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ef4-qabdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:table-of-contents"} {...others} />);
}

export default Component;
