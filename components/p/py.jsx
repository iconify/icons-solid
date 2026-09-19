import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qp5p3d7zu.css';
import '../../css/t/t3p_-vs5e.css';
import '../../css/v/v1agn4bgq.css';
import '../../css/r/rztyzltfa.css';
import '../../css/t/t-txvlbdj.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qp5p3d7zu"/><path class="t3p_-vs5e"/><path class="v1agn4bgq"/><path class="rztyzltfa"/><path class="t-txvlbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:py"} {...others} />);
}

export default Component;
