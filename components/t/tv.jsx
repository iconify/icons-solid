import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/uhj0xpbzi.css';
import '../../css/j/jtvtzqbpm.css';
import '../../css/n/n12i5kbbx.css';
import '../../css/l/lme8rwv7r.css';
import '../../css/b/bpfsbbb0e.css';
import '../../css/k/k0_gd0tpv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="uhj0xpbzi"/><path class="jtvtzqbpm"/><path class="n12i5kbbx"/><path class="lme8rwv7r"/><path class="bpfsbbb0e"/><path class="k0_gd0tpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tv"} {...others} />);
}

export default Component;
