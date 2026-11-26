import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oanjqsz0b.css';
import '../../css/e/ekxi-fgjs.css';
import '../../css/g/gqt4o4qiq.css';
import '../../css/d/dpa8rhbry.css';
import '../../css/y/y0u6yo6sf.css';
import '../../css/k/k3re89bca.css';
import '../../css/h/h_udk6bne.css';
import '../../css/g/g8i4gkbym.css';
import '../../css/t/t82ttqbze.css';
import '../../css/e/em_of_zct.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="translate(-32.254 -50.188)scale(2.84)"><path class="oanjqsz0b"/><path class="ekxi-fgjs"/><ellipse class="gqt4o4qiq"/><ellipse class="dpa8rhbry"/><circle class="y0u6yo6sf"/><path class="k3re89bca"/><ellipse class="h_udk6bne"/><ellipse class="g8i4gkbym"/><circle class="t82ttqbze"/><path class="em_of_zct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:eyes"} {...others} />);
}

export default Component;
