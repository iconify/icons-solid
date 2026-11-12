import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1w56ebrl.css';
import '../../css/h/h4n6ekwws.css';
import '../../css/v/v9l-3ccqe.css';
import '../../css/q/q6k7bhb7m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG5fLRgpGO" x1="-51.3" x2="563.3" y1="78.6" y2="433.4" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v1w56ebrl"/></linearGradient><path fill="url(#SVG5fLRgpGO)" class="h4n6ekwws"/><path class="v9l-3ccqe"/><path class="q6k7bhb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opengrammar-dark"} {...others} />);
}

export default Component;
