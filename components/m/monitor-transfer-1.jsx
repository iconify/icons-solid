import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m546sfttd.css';
import '../../css/q/qodw3ibyv.css';
import '../../css/a/a3-sxj3ji.css';
import '../../css/x/xtv990b8m.css';
import '../../css/z/zo--ehb_e.css';
import '../../css/i/igw8q698h.css';
import '../../css/t/tm0wxebne.css';
import '../../css/a/azi_rwbnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m546sfttd"/><path class="qodw3ibyv"/><path class="a3-sxj3ji"/><path class="xtv990b8m"/><path class="zo--ehb_e"/><path class="igw8q698h"/><path class="tm0wxebne"/><path class="azi_rwbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-transfer-1"} {...others} />);
}

export default Component;
