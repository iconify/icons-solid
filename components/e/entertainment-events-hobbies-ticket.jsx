import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e95aribsc.css';
import '../../css/u/uaa9tzbcp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e95aribsc"/><path class="uaa9tzbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-ticket"} {...others} />);
}

export default Component;
