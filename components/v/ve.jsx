import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wab7z83xz.css';
import '../../css/t/t_-l--tcy.css';
import '../../css/c/colwxxpxh.css';
import '../../css/j/jb1ngkwzg.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wab7z83xz"/><path class="t_-l--tcy"/><path class="colwxxpxh"/><path class="jb1ngkwzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ve"} {...others} />);
}

export default Component;
