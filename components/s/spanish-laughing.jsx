import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qd6a9ybfi.css';
import '../../css/h/hk5nxsb5v.css';
import '../../css/n/nu5aodbli.css';
import '../../css/y/y0axjgtiy.css';
import '../../css/x/xn1c497ix.css';
import '../../css/u/uzay_ziwt.css';
import '../../css/p/pvp_4di_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qd6a9ybfi"/><path class="hk5nxsb5v"/><path class="nu5aodbli"/><path class="y0axjgtiy"/><path class="xn1c497ix"/><path class="uzay_ziwt"/><path class="pvp_4di_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:spanish-laughing"} {...others} />);
}

export default Component;
