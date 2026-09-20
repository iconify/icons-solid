import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ksd520_7n.css';
import '../../css/o/o35al36xy.css';
import '../../css/x/x5c1hxbne.css';
import '../../css/t/tyz1v_bre.css';
import '../../css/z/zi11-bc7j.css';
import '../../css/a/a7ehgz2ep.css';
import '../../css/i/iqd_2c6bl.css';
import '../../css/j/jtb8--0md.css';
import '../../css/q/qsd1ls4zj.css';
import '../../css/y/y09i0xb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ksd520_7n"/><path class="o35al36xy"/><path class="x5c1hxbne"/><path class="tyz1v_bre"/><path class="zi11-bc7j"/><path class="a7ehgz2ep"/><path class="iqd_2c6bl"/><path class="jtb8--0md"/><path class="qsd1ls4zj"/><path class="y09i0xb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:board-game-ludo"} {...others} />);
}

export default Component;
