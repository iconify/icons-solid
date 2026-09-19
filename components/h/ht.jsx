import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jmwa5qbke.css';
import '../../css/x/xs5ohebgj.css';
import '../../css/v/v5cbpkyaj.css';
import '../../css/f/fw6_yml4d.css';
import '../../css/h/hs-f43o-o.css';
import '../../css/a/a_8m-3bry.css';
import '../../css/w/w61b3kbfv.css';
import '../../css/o/oudso9vsy.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="jmwa5qbke"/><path class="xs5ohebgj"/><path class="v5cbpkyaj"/><circle class="fw6_yml4d"/><circle class="hs-f43o-o"/><path class="a_8m-3bry"/><path class="w61b3kbfv"/><path class="oudso9vsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ht"} {...others} />);
}

export default Component;
