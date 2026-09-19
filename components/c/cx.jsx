import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/o8eqkab3x.css';
import '../../css/z/zm3xmlb4u.css';
import '../../css/m/m32fw5efl.css';
import '../../css/t/t-ljgqbzr.css';
import '../../css/r/rwf4dg05c.css';
import '../../css/f/f8y05kbck.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="o8eqkab3x"/><path class="zm3xmlb4u"/><circle class="m32fw5efl"/><path class="t-ljgqbzr"/><path class="rwf4dg05c"/><path class="f8y05kbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:cx"} {...others} />);
}

export default Component;
