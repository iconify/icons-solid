import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/dlejmac_f.css';
import '../../css/i/iadlwcc0p.css';
import '../../css/p/pbejrrbtb.css';
import '../../css/z/zdgvfvbkv.css';
import '../../css/r/r66aynbmu.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="dlejmac_f"/><path class="iadlwcc0p"/><path class="pbejrrbtb"/><path class="zdgvfvbkv"/><path class="r66aynbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:bq"} {...others} />);
}

export default Component;
