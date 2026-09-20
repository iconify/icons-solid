import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrnzrzbbr.css';
import '../../css/h/h6m5ozxxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrnzrzbbr"/><path class="h6m5ozxxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smartphone-app-widget-remove"} {...others} />);
}

export default Component;
