import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zlnfr6ytt.css';
import '../../css/p/pv731rbcc.css';
import '../../css/s/sox0l5b9y.css';
import '../../css/d/drmdxqbbg.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zlnfr6ytt"/><path class="pv731rbcc"/><path class="sox0l5b9y"/><path class="drmdxqbbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tz-zanzibar"} {...others} />);
}

export default Component;
