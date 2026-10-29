import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/imt6p7xdh.css';
import '../../css/a/awlg82ble.css';
import '../../css/c/ck8qjh1op.css';
import '../../css/g/gq0ay1izs.css';
import '../../css/r/rjvsqxvmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="imt6p7xdh wm-k"/><path class="awlg82ble wm-k"/><path class="ck8qjh1op wm-a"/><path class="gq0ay1izs wm-s"/><path class="rjvsqxvmf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:black-cat-sketch"} {...others} />);
}

export default Component;
