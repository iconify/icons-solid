import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ap5h-cbhb.css';
import '../../css/l/llefpiban.css';
import '../../css/f/fvgc87o3c.css';
import '../../css/w/wbk6h5rku.css';
import '../../css/b/b86buo32x.css';
import '../../css/k/ki55z6ilg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ap5h-cbhb wm-k"/><path class="llefpiban wm-a"/><path class="fvgc87o3c wm-shadow"/><path class="wbk6h5rku wm-a"/><path class="b86buo32x wm-k"/><path class="ki55z6ilg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlock-engrave"} {...others} />);
}

export default Component;
