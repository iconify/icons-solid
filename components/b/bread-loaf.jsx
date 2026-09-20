import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfno_gbzx.css';
import '../../css/y/ydsk9w9qq.css';
import '../../css/o/ofdn5uy4y.css';
import '../../css/n/nt_mv1bzt.css';
import '../../css/s/svabjzbny.css';
import '../../css/c/cpqd5i2cr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xfno_gbzx"/><path class="ydsk9w9qq"/><path class="ofdn5uy4y"/><path class="nt_mv1bzt"/><path class="svabjzbny"/><path class="cpqd5i2cr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:bread-loaf"} {...others} />);
}

export default Component;
