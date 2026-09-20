import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxa6bmemp.css';
import '../../css/s/s03b48b1u.css';
import '../../css/z/z1fbjac_z.css';
import '../../css/r/rpd_-w94c.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b45nybbyo.css';
import '../../css/m/ms97xcczk.css';
import '../../css/b/bcd3v_kfe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mxa6bmemp"/><path class="s03b48b1u"/><path class="z1fbjac_z"/><path class="rpd_-w94c"/><g class="ij2x_72vy"><path class="b45nybbyo"/><path class="ms97xcczk"/><path class="bcd3v_kfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bar-chart"} {...others} />);
}

export default Component;
