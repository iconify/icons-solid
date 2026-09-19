import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/eu38be4cr.css';
import '../../css/v/v3bfcx4mg.css';
import '../../css/q/q-jmt8b8w.css';
import '../../css/k/kw1i4pb1k.css';
import '../../css/w/wmw783fky.css';
import '../../css/n/n5greobqx.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="eu38be4cr"/><path class="v3bfcx4mg"/><path class="q-jmt8b8w"/><circle class="kw1i4pb1k"/><path class="wmw783fky"/><path class="n5greobqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ec"} {...others} />);
}

export default Component;
