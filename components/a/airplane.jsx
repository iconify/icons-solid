import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g90-vg5gl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g90-vg5gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:airplane"} {...others} />);
}

export default Component;
