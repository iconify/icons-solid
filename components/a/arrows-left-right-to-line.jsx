import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io8cndj1g.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="io8cndj1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:arrows-left-right-to-line"} {...others} />);
}

export default Component;
