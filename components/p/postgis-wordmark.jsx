import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiq-kp2it.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="eiq-kp2it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:postgis-wordmark"} {...others} />);
}

export default Component;
