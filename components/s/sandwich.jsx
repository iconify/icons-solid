import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g_rdvqvju.css';
import '../../css/t/twoynubjx.css';
import '../../css/h/h0su9ok4d.css';
import '../../css/h/h8wb40b9m.css';
import '../../css/f/ffkddcbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g_rdvqvju"/><path class="twoynubjx wm-shine"/><path class="h0su9ok4d wm-k"/><path class="h8wb40b9m wm-a"/><path class="ffkddcbxp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sandwich"} {...others} />);
}

export default Component;
