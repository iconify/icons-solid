import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/r/r91il6oih.css';
import '../../css/q/qlwuj3iye.css';
import '../../css/r/rdeo3zbso.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/h/hk6reob8o.css';
import '../../css/q/qdw78qbta.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="r91il6oih"/><path class="qlwuj3iye"/><path class="rdeo3zbso"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/><path class="hk6reob8o"/><circle class="qdw78qbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:vg"} {...others} />);
}

export default Component;
