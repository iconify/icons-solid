import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt6q9oj5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt6q9oj5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bookmark-add"} {...others} />);
}

export default Component;
