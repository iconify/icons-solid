import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idwbwtb9h.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="idwbwtb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:plug-circle-plus"} {...others} />);
}

export default Component;
