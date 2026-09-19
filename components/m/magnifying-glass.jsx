import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai8j4uodp.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ai8j4uodp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:magnifying-glass"} {...others} />);
}

export default Component;
