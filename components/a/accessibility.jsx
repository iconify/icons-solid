import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/o/olp_-1bpf.css';
import '../../css/n/nhxal2bqy.css';
import '../../css/x/x0sydx75k.css';
import '../../css/o/onk7t7bfm.css';
import '../../css/s/srv2q6bik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="olp_-1bpf"/><path class="nhxal2bqy"/><path class="x0sydx75k"/><path class="onk7t7bfm"/><path class="srv2q6bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:accessibility"} {...others} />);
}

export default Component;
