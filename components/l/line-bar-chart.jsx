import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3bv6j6bj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c3bv6j6bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:line-bar-chart"} {...others} />);
}

export default Component;
