import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/ddubuf51j.css';
import '../../css/i/ieuur3b8f.css';
import '../../css/w/w4vpg2m1r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ddubuf51j"/><path class="ieuur3b8f"/><path class="w4vpg2m1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-1-duo"} {...others} />);
}

export default Component;
