import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls58l8zhz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ls58l8zhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:canoe-under-wrench"} {...others} />);
}

export default Component;
