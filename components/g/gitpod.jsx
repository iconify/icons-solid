import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjvtkxb5w.css';
import '../../css/r/r-ebtoe7s.css';
import '../../css/i/iuzmekejb.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGtlzHEeXv" x1="60.966" x2="19.202" y1="13.48" y2="78.93" gradientTransform="matrix(1.58024 0 0 1.42222 0 .61)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tjvtkxb5w"/><stop offset="1" class="r-ebtoe7s"/></linearGradient></defs><path fill="url(#SVGtlzHEeXv)" class="iuzmekejb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gitpod"} {...others} />);
}

export default Component;
