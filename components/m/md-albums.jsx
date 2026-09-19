import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgi0i4ykh.css';
import '../../css/e/e1am0fiug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tgi0i4ykh"/><path class="e1am0fiug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-albums"} {...others} />);
}

export default Component;
