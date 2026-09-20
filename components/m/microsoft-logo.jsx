import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxlk8ob1p.css';
import '../../css/n/n8xpd4bae.css';
import '../../css/x/x926x_epj.css';
import '../../css/v/v4v7lsb3f.css';
import '../../css/f/fzrkz0u4d.css';
import '../../css/i/inimucccz.css';
import '../../css/k/krco83b3k.css';
import '../../css/q/q8918f--y.css';
import '../../css/k/k7t555pdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxlk8ob1p"/><path class="n8xpd4bae"/><path class="x926x_epj"/><path class="v4v7lsb3f"/><path class="fzrkz0u4d"/><path class="inimucccz"/><path class="krco83b3k"/><path class="q8918f--y"/><path class="k7t555pdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:microsoft-logo"} {...others} />);
}

export default Component;
