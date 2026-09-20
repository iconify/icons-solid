import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cla7j4u7f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cla7j4u7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:poster-box"} {...others} />);
}

export default Component;
