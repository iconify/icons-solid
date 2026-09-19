import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfmad0bjf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dfmad0bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:notification-off-filled"} {...others} />);
}

export default Component;
