import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oack4rxtj.css';
import '../../css/d/d-y8wgolu.css';
import '../../css/f/flvjb4byi.css';
import '../../css/c/ce4_fwbku.css';
import '../../css/v/v4zv_uo1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oack4rxtj"/><path class="d-y8wgolu wm-a"/><path class="flvjb4byi wm-a"/><path class="ce4_fwbku"/><path class="v4zv_uo1i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:printer-duo"} {...others} />);
}

export default Component;
