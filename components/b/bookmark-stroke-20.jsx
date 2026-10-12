import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_9hn1bdb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t_9hn1bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bookmark-stroke-20"} {...others} />);
}

export default Component;
