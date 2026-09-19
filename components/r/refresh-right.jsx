import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1-x7w-ua.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d1-x7w-ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:refresh-right"} {...others} />);
}

export default Component;
