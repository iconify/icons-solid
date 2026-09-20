import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2u7ik9ps.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="j2u7ik9ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:trash"} {...others} />);
}

export default Component;
