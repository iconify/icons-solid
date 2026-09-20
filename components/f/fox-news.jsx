import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv26cacrn.css';
import '../../css/t/tn13mns0i.css';
import '../../css/m/mdz63-bin.css';
import '../../css/e/eh0vm5bms.css';

const viewBox = {"width":1235,"height":1235};
const content = `<path class="dv26cacrn"/><path class="tn13mns0i"/><path class="mdz63-bin"/><path class="eh0vm5bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fox-news"} {...others} />);
}

export default Component;
