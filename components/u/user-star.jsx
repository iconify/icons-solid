import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vutc8zb9c.css';
import '../../css/e/el0rrrluf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vutc8zb9c"/><path class="el0rrrluf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:user-star"} {...others} />);
}

export default Component;
