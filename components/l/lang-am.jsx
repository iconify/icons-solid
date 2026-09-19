import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jby922d-z.css';
import '../../css/e/eo0ie4bwv.css';
import '../../css/k/kjecq87zs.css';
import '../../css/b/bsuj83wqr.css';
import '../../css/c/cibj5pwcl.css';
import '../../css/c/c61bncj2s.css';
import '../../css/u/ucslxuc3s.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="jby922d-z"/><path class="eo0ie4bwv"/><path class="kjecq87zs"/><circle class="bsuj83wqr"/><g class="cibj5pwcl"><path class="c61bncj2s"/><path class="ucslxuc3s"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-am"} {...others} />);
}

export default Component;
