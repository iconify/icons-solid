import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1m6q9zqo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p1m6q9zqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-double-down-fill-16"} {...others} />);
}

export default Component;
