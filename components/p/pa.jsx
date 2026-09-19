import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mhu9k5_pu.css';
import '../../css/e/e-ol1g8zb.css';
import '../../css/m/mtjya3hdf.css';
import '../../css/r/r-toaehia.css';
import '../../css/l/l98r4-bsa.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mhu9k5_pu"/><path class="e-ol1g8zb"/><path class="mtjya3hdf"/><path class="r-toaehia"/><path class="l98r4-bsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pa"} {...others} />);
}

export default Component;
