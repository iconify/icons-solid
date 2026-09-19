import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adel1pq3b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="adel1pq3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:arrow-up"} {...others} />);
}

export default Component;
