import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdbum9ggv.css';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/o/o6-twqc6o.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVG8JtNrbdz" class="zdbum9ggv"/></defs><mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><use href="#SVG8JtNrbdz"/><use href="#SVG8JtNrbdz"/><path class="o6-twqc6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tk"} {...others} />);
}

export default Component;
