import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua9keqbpv.css';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e7pn7ylvm.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="SVGJjBfxcFL" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="ua9keqbpv"/></mask><g mask="url(#SVGJjBfxcFL)" class="nz_20wbpz"><path class="e7pn7ylvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:upload"} {...others} />);
}

export default Component;
