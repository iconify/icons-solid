import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/dg7kedy1c.css';
import '../../css/k/k0xylug1p.css';
import '../../css/t/tsz6qlbio.css';
import '../../css/u/ux6s2nbnw.css';
import '../../css/i/i0i01-blm.css';
import '../../css/d/dbjjifdbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="dg7kedy1c"/><path class="k0xylug1p"/><ellipse class="tsz6qlbio"/><path class="ux6s2nbnw"/><path class="i0i01-blm"/><path class="dbjjifdbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-broken"} {...others} />);
}

export default Component;
