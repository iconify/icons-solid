import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db5sjti-j.css';
import '../../css/m/mc7-3mbjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="db5sjti-j"/><path class="mc7-3mbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-angular-outline"} {...others} />);
}

export default Component;
