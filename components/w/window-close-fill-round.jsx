import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i91yb9t8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i91yb9t8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-close-fill-round"} {...others} />);
}

export default Component;
