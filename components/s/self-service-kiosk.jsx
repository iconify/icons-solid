import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym4b7ibib.css';
import '../../css/e/ejuejtf0b.css';
import '../../css/r/rn_-vbbno.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/z/znk-rsplj.css';
import '../../css/f/fc9ipfbnw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ym4b7ibib"/><path class="ejuejtf0b"/><path class="rn_-vbbno"/><g class="bvkc79bpm"><path class="znk-rsplj"/><path class="fc9ipfbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:self-service-kiosk"} {...others} />);
}

export default Component;
