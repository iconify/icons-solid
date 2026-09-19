import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/e3s0is8tx.css';
import '../../css/u/ug0o9qbnm.css';
import '../../css/v/vwsqgnj8x.css';
import '../../css/r/r3ij0x-wy.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="e3s0is8tx"/><path class="ug0o9qbnm"/><path class="vwsqgnj8x"/><path class="r3ij0x-wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:eg"} {...others} />);
}

export default Component;
