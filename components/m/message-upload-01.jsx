import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/javag0hlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="javag0hlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-upload-01"} {...others} />);
}

export default Component;
