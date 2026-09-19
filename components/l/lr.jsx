import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qdic34l5p.css';
import '../../css/z/z9agzmbmm.css';
import '../../css/w/w0u17t6tg.css';
import '../../css/h/hloepabws.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qdic34l5p"/><path class="z9agzmbmm"/><path class="w0u17t6tg"/><path class="hloepabws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lr"} {...others} />);
}

export default Component;
