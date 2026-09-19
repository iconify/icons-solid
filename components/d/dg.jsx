import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g7pvjc1rr.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/f/f9su2r5gf.css';
import '../../css/u/u-1eqsbad.css';
import '../../css/s/so9d4ry3z.css';
import '../../css/c/c9s5drhpp.css';
import '../../css/j/jmkaty4im.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="g7pvjc1rr"/><path class="dyrp3tsfw"/><path class="f9su2r5gf"/><path class="u-1eqsbad"/><path class="so9d4ry3z"/><path class="c9s5drhpp"/><path class="jmkaty4im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:dg"} {...others} />);
}

export default Component;
