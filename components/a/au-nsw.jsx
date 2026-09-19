import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/w/wm8r90bpm.css';
import '../../css/f/f1ukjqbtv.css';
import '../../css/d/d6pxd4b4w.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/><path class="wm8r90bpm"/><path class="f1ukjqbtv"/><path class="d6pxd4b4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:au-nsw"} {...others} />);
}

export default Component;
