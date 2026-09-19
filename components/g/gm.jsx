import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nv71sffwz.css';
import '../../css/y/yofq8jbuu.css';
import '../../css/c/cd5h0xb6g.css';
import '../../css/k/k_kb5mclh.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="nv71sffwz"/><path class="yofq8jbuu"/><path class="cd5h0xb6g"/><path class="k_kb5mclh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gm"} {...others} />);
}

export default Component;
