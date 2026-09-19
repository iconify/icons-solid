import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v78z00blh.css';
import '../../css/a/aj0gbdb0u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v78z00blh"/><path class="aj0gbdb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:arduino-wordmark"} {...others} />);
}

export default Component;
