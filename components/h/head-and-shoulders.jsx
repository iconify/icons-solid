import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on4ugfwlf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="on4ugfwlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:head-and-shoulders"} {...others} />);
}

export default Component;
