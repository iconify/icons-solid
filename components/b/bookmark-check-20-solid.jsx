import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok65zv8cj.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="ok65zv8cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:bookmark-check-20-solid"} {...others} />);
}

export default Component;
