import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f8sk6acni.css';
import '../../css/e/e0jpscbjj.css';
import '../../css/o/o9thxdb3w.css';
import '../../css/m/my_td7b3e.css';
import '../../css/b/bf1slxbqu.css';
import '../../css/k/k1mwmewig.css';
import '../../css/j/jrlj0kb_a.css';
import '../../css/c/cex-s84ki.css';
import '../../css/g/gs3j61b5w.css';
import '../../css/u/u4yv6ebhb.css';
import '../../css/g/got9t4bxh.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="f8sk6acni"/><path class="e0jpscbjj"/><path class="o9thxdb3w"/><circle class="my_td7b3e"/><circle class="bf1slxbqu"/><path class="k1mwmewig"/><path class="jrlj0kb_a"/><circle class="cex-s84ki"/><path class="gs3j61b5w"/><path class="u4yv6ebhb"/><path class="got9t4bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-mo"} {...others} />);
}

export default Component;
