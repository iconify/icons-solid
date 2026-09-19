import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybjb7-_9i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ybjb7-_9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:man-outline"} {...others} />);
}

export default Component;
