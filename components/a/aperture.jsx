import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a5bhd2t3h.css';
import '../../css/o/o1xkpzb8n.css';
import '../../css/q/q7sgi2bce.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/zpoereb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a5bhd2t3h"/><path class="o1xkpzb8n"/><path class="q7sgi2bce wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="wm-a zpoereb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:aperture"} {...others} />);
}

export default Component;
