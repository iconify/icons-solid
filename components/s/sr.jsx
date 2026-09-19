import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zaiillbra.css';
import '../../css/j/j973-g9pp.css';
import '../../css/p/plxk164_u.css';
import '../../css/b/bt84dg1qf.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zaiillbra"/><path class="j973-g9pp"/><path class="plxk164_u"/><path class="bt84dg1qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sr"} {...others} />);
}

export default Component;
