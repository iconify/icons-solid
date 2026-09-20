import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnx33c0jb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="fnx33c0jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:line-spacing"} {...others} />);
}

export default Component;
