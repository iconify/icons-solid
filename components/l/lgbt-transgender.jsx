import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/iq_vq268a.css';
import '../../css/m/mwre1nbej.css';
import '../../css/p/pde_5pbta.css';
import '../../css/g/glde1y8it.css';
import '../../css/d/djwypjtex.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="iq_vq268a"/><path class="mwre1nbej"/><path class="pde_5pbta"/><path class="glde1y8it"/><path class="djwypjtex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lgbt-transgender"} {...others} />);
}

export default Component;
