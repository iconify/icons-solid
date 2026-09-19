import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi_9_0blf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zi_9_0blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:d-arrow-left"} {...others} />);
}

export default Component;
