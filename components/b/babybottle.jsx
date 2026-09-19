import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laa4xyb5b.css';
import '../../css/d/d1eq1m65j.css';
import '../../css/o/oltaxob6h.css';
import '../../css/w/w3alieb7z.css';
import '../../css/q/qnbwq0bmz.css';
import '../../css/w/wpti9uslf.css';
import '../../css/x/xe_wxac6h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="laa4xyb5b"/><path class="d1eq1m65j"/><path class="oltaxob6h"/><path class="w3alieb7z"/><path class="qnbwq0bmz"/><path class="wpti9uslf"/><path class="xe_wxac6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:babybottle"} {...others} />);
}

export default Component;
