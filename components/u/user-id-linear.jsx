import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nol19vq4t.css';
import '../../css/r/r5rugytbx.css';
import '../../css/e/ea90dub6v.css';
import '../../css/q/qbunz8cnn.css';
import '../../css/v/vhte9_bca.css';
import '../../css/l/lfowyvbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="nol19vq4t"/><path class="r5rugytbx"/><path class="ea90dub6v"/><path class="qbunz8cnn"/><path class="vhte9_bca"/><path class="lfowyvbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-id-linear"} {...others} />);
}

export default Component;
