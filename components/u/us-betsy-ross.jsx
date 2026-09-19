import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pfmrfyugg.css';
import '../../css/e/e7nec2b-k.css';
import '../../css/q/q7fxrfbxx.css';
import '../../css/h/h1zxe6c2d.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pfmrfyugg"/><path class="e7nec2b-k"/><path class="q7fxrfbxx"/><path class="h1zxe6c2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-betsy-ross"} {...others} />);
}

export default Component;
