import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr71nbcku.css';
import '../../css/p/p7p46pb5e.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vr71nbcku"/><path class="p7p46pb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:codewars-wordmark"} {...others} />);
}

export default Component;
