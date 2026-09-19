import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr8snkabi.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="vr8snkabi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:filter-lowpass"} {...others} />);
}

export default Component;
