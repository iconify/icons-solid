import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu3v6tmeh.css';

const viewBox = {"width":192,"height":512};
const content = `<path class="vu3v6tmeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:male"} {...others} />);
}

export default Component;
