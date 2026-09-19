import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/dl25jc1ul.css';
import '../../css/h/huww0bb0e.css';
import '../../css/t/tznoqhb6c.css';
import '../../css/n/n_30b__vp.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="dl25jc1ul"/><path class="huww0bb0e"/><path class="tznoqhb6c"/><path class="n_30b__vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:uy"} {...others} />);
}

export default Component;
