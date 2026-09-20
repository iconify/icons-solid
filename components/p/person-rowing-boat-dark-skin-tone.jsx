import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a80ocnjos.css';
import '../../css/y/y9bhakbuy.css';
import '../../css/u/ui62ld1_a.css';
import '../../css/b/bbt4cvb0h.css';
import '../../css/f/f72r-6igh.css';
import '../../css/o/o7au2-bxv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/prtha0buu.css';
import '../../css/a/a_dxn5qkk.css';
import '../../css/w/wnfao2bsd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a80ocnjos"/><path class="y9bhakbuy"/><path class="ui62ld1_a"/><g class="bbt4cvb0h"><circle class="f72r-6igh"/><path class="o7au2-bxv"/></g><g class="ij2x_72vy"><path class="prtha0buu"/><circle class="f72r-6igh"/><path class="a_dxn5qkk"/><path class="wnfao2bsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-rowing-boat-dark-skin-tone"} {...others} />);
}

export default Component;
