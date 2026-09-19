import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/f/fukm4cqom.css';
import '../../css/w/wj37wty1v.css';
import '../../css/c/c0c691e5m.css';
import '../../css/w/wxoz711ah.css';
import '../../css/j/joql2qpsq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/><path class="fukm4cqom"/><path class="wj37wty1v"/><path class="c0c691e5m"/><path class="wxoz711ah"/><path class="joql2qpsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tc"} {...others} />);
}

export default Component;
