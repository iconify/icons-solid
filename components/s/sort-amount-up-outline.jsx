import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqsny_bib.css';
import '../../css/b/b14jacbag.css';
import '../../css/v/vlpjmacdk.css';
import '../../css/p/pz5dn8bel.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mqsny_bib"/><path class="b14jacbag"/><path clip-rule="evenodd" class="vlpjmacdk"/><path class="pz5dn8bel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-amount-up-outline"} {...others} />);
}

export default Component;
