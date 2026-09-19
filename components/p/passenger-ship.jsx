import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkhnj3bkj.css';
import '../../css/n/nzjwj9bfr.css';
import '../../css/v/vgjnj4bmc.css';
import '../../css/w/wpa7_qb6h.css';
import '../../css/k/ke6l87bqb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zkhnj3bkj"/><path class="nzjwj9bfr"/><path class="vgjnj4bmc"/><path class="wpa7_qb6h"/><path class="ke6l87bqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:passenger-ship"} {...others} />);
}

export default Component;
