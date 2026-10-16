import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3me-4caq.css';
import '../../css/r/rr-f5tb6z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c3me-4caq"/><path class="rr-f5tb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-star-20"} {...others} />);
}

export default Component;
