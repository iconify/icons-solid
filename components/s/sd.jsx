import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d2vi5obgs.css';
import '../../css/z/zlm9_ua_n.css';
import '../../css/c/cgkqrqbvm.css';
import '../../css/d/dr6b1tbyt.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="d2vi5obgs"/><path class="zlm9_ua_n"/><path class="cgkqrqbvm"/><path class="dr6b1tbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sd"} {...others} />);
}

export default Component;
