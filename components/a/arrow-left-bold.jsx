import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erpo6qb3i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="erpo6qb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:arrow-left-bold"} {...others} />);
}

export default Component;
