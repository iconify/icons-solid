import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1w56ebrl.css';
import '../../css/h/h4n6ekwws.css';
import '../../css/c/c3x042b-j.css';
import '../../css/q/q6k7bhb7m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGWbuQpcVi" x1="-51.298" x2="563.298" y1="78.581" y2="433.419" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v1w56ebrl"/></linearGradient><path fill="url(#SVGWbuQpcVi)" class="h4n6ekwws"/><path class="c3x042b-j"/><path class="q6k7bhb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opengrammar-dark"} {...others} />);
}

export default Component;
