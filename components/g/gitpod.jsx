import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn5-jrewn.css';
import '../../css/i/iuzmekejb.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGKu1HaeJw" x1="60.966" x2="19.202" y1="13.48" y2="78.93" gradientTransform="matrix(1.58024 0 0 1.42222 0 .61)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nn5-jrewn"/><stop offset="1" class="nn5-jrewn"/></linearGradient></defs><path fill="url(#SVGKu1HaeJw)" class="iuzmekejb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:gitpod"} {...others} />);
}

export default Component;
