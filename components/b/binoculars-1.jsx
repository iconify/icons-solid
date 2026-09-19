import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il83-8b-e.css';
import '../../css/c/c579g-kji.css';
import '../../css/u/uukk0ccsz.css';
import '../../css/c/cz87yab3o.css';
import '../../css/y/y7vtg5pyk.css';
import '../../css/w/wfdo5dbcx.css';
import '../../css/m/mib1rabbt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="il83-8b-e"/><path clip-rule="evenodd" class="c579g-kji"/><ellipse transform="rotate(12 20.145 54.43)" class="uukk0ccsz"/><path clip-rule="evenodd" class="cz87yab3o"/><path clip-rule="evenodd" class="y7vtg5pyk"/><ellipse transform="rotate(168 26.965 30.35)scale(1 -1)" class="wfdo5dbcx"/><path clip-rule="evenodd" class="mib1rabbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:binoculars-1"} {...others} />);
}

export default Component;
