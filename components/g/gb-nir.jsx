import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cn05-lgul.css';
import '../../css/r/rr0f87btl.css';
import '../../css/v/vuqm_bckz.css';
import '../../css/a/agakdmb2g.css';
import '../../css/m/mi650rwmx.css';
import '../../css/t/tyv1x6bjv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cn05-lgul"/><path class="rr0f87btl"/><path class="vuqm_bckz"/><path class="agakdmb2g"/><path class="mi650rwmx"/><path class="tyv1x6bjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gb-nir"} {...others} />);
}

export default Component;
