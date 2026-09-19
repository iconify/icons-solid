import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je36gvb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="je36gvb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-last-page"} {...others} />);
}

export default Component;
