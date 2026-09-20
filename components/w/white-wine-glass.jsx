import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbmfgvher.css';
import '../../css/y/y_gui7nxr.css';
import '../../css/f/f7gwqtbag.css';
import '../../css/y/y6tvefbkj.css';
import '../../css/m/mu-8qlb2p.css';
import '../../css/q/q-a8g8hzl.css';
import '../../css/z/z8iqzh12x.css';
import '../../css/a/angy69b3o.css';
import '../../css/t/tcu7wgbiv.css';
import '../../css/t/tdqs5vfks.css';
import '../../css/h/hl3uwjb8e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mbmfgvher"/><path class="y_gui7nxr"/><path class="f7gwqtbag"/><path class="y6tvefbkj"/><path class="mu-8qlb2p"/><path class="q-a8g8hzl"/><path class="z8iqzh12x"/><path class="angy69b3o"/><path class="tcu7wgbiv"/><path class="tdqs5vfks"/><path class="hl3uwjb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:white-wine-glass"} {...others} />);
}

export default Component;
