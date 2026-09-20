import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz6lklb-r.css';
import '../../css/g/g0-_kt8yq.css';
import '../../css/r/rxp8pmhkr.css';
import '../../css/q/qlhxhcbbo.css';
import '../../css/u/uya55bbrw.css';
import '../../css/g/gy05zvb_a.css';
import '../../css/l/lv_zaccok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zz6lklb-r"/><path class="g0-_kt8yq"/><path class="rxp8pmhkr"/><path class="qlhxhcbbo"/><path class="uya55bbrw"/><path class="gy05zvb_a"/><path class="lv_zaccok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ab-testing-monitors"} {...others} />);
}

export default Component;
