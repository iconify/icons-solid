import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4el2bbpx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h4el2bbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:helmet-safety-filled"} {...others} />);
}

export default Component;
