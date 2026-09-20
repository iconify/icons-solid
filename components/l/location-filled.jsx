import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/setvc4bqc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="setvc4bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:location-filled"} {...others} />);
}

export default Component;
