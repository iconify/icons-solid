import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj4ta2cbo.css';
import '../../css/t/t4yq35mvs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yj4ta2cbo"/><path class="t4yq35mvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-star-filled"} {...others} />);
}

export default Component;
