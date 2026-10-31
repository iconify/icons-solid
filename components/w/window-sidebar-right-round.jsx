import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2b0vdbet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2b0vdbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-sidebar-right-round"} {...others} />);
}

export default Component;
