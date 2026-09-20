import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds7t43jyo.css';
import '../../css/e/e3ss8accz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ds7t43jyo"/><path class="e3ss8accz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xdc"} {...others} />);
}

export default Component;
