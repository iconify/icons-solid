import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/ate8bpb7n.css';
import '../../css/h/h4xik3hmv.css';
import '../../css/s/si89vro1n.css';
import '../../css/m/mkmgiffug.css';
import '../../css/b/bcc55lb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ate8bpb7n wm-shadow"/><path class="h4xik3hmv wm-shadow"/><path class="si89vro1n"/><path class="mkmgiffug"/><path class="bcc55lb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:trees"} {...others} />);
}

export default Component;
