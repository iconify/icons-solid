import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-8ysebdp.css';
import '../../css/g/gfcjjsoqo.css';
import '../../css/g/gwfsmlgay.css';
import '../../css/o/oocvxym7f.css';
import '../../css/h/hu4mifblk.css';
import '../../css/p/pagrukb1j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k-8ysebdp"/><path class="gfcjjsoqo"/><path class="gwfsmlgay"/><path class="oocvxym7f"/><path class="hu4mifblk"/><path class="pagrukb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:alarm-clock"} {...others} />);
}

export default Component;
