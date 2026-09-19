import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j_z595o6n.css';
import '../../css/c/cc3kinbvz.css';
import '../../css/m/mn49q7qak.css';
import '../../css/d/dzab0bbvq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="j_z595o6n"/><path class="cc3kinbvz"/><path class="mn49q7qak"/><path class="dzab0bbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:en-us"} {...others} />);
}

export default Component;
