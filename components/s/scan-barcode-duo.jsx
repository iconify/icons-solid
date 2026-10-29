import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mek1j-bvd.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/x/x8izv9k1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mek1j-bvd wm-a"/><path class="l9lv5_bcf"/><path class="wm-a x8izv9k1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-barcode-duo"} {...others} />);
}

export default Component;
