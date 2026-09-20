import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brk4pcs8h.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="brk4pcs8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:compass-16"} {...others} />);
}

export default Component;
