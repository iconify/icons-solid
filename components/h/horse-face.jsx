import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0hjvxsib.css';
import '../../css/x/xw5b4oyqf.css';
import '../../css/l/l-afxsb-q.css';
import '../../css/s/sx3p9ubrj.css';
import '../../css/w/w_kwowb-h.css';
import '../../css/m/mqjc45bdq.css';
import '../../css/j/jupyncbtt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v0hjvxsib"/><path class="xw5b4oyqf"/><path class="l-afxsb-q"/><path class="sx3p9ubrj"/><path class="w_kwowb-h"/><path class="mqjc45bdq"/><path class="jupyncbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:horse-face"} {...others} />);
}

export default Component;
