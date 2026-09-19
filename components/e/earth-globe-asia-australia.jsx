import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e893zxb0r.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="e893zxb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:earth-globe-asia-australia"} {...others} />);
}

export default Component;
